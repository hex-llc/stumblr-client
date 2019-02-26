'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onGetAllBlogs = function (pageChange) {
  api.getAllBlogs()
    .then(ui.onGetAllBlogsSuccess)
    .then(() => {
      if (pageChange === 'to home') {
        $('.on-action').show().html(`<h1> Home Page </h1>`)
        setTimeout(() => { $('.on-action').fadeOut(500) }, 500)
      } else if (pageChange === 'sign out') {
        $('.on-action').show().html(`<h1> 👋 Bye! </h1>`)
        setTimeout(() => { $('.on-action').fadeOut(500) }, 500)
      }
    })
    .then(() => {
      for (let i = 0; i < $('.content').children().length; i++) {
        const dataId = $('.content').children()[i].dataset.id
        const height = $(`[data-id=${dataId}]`).find('.blog-post-body').height()
        // console.log('blog post height is', height)
        if (height >= 330) {
          $(`[data-id=${dataId}]`).children('.blog-post-body').addClass('shrink-post')
          $(`[data-id=${dataId}]`).children()[5].hidden = false
        }
      }
    })
    .catch(ui.onGetAllBlogsError)
}

const onCreateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createBlog(data)
    .then(ui.onCreateBlogSuccess)
    .then(() => {
      if (store.isInHome) {
        onGetAllBlogs(false)
      } else {
        onGetUserBlogs(false)
      }
    })
    .catch(ui.onCreateBlogFailure)
}

const onGetUserBlogs = function (pageChange) {
  api.getUserBlogs()
    .then(ui.onGetUserBlogsSuccess)
    .then(() => {
      if (pageChange === 'to my blogs') {
        $('.on-action').show().html(`<h1> My Posts </h1>`)
        setTimeout(() => { $('.on-action').fadeOut(500) }, 500)
      }
    })
    .then(() => {
      for (let i = 0; i < $('.content').children().length; i++) {
        const dataId = $('.content').children()[i].dataset.id
        const height = $(`[data-id=${dataId}]`).find('.blog-post-body').height()
        // console.log('blog post height is', height)
        if (height >= 330) {
          $(`[data-id=${dataId}]`).children('.blog-post-body').addClass('shrink-post')
          $(`[data-id=${dataId}]`).children()[4].hidden = false
        }
      }
    })
    .catch(ui.onGetUserBlogsError)
}

const onShowBlog = function (event) {
  event.preventDefault()
  const dataId = $(this).parent().parent().parent().data('id')
  api.showBlog(dataId)
    .then(ui.onShowBlogSuccess)
    .catch(ui.onShowBlogError)
}

const onUpdateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateBlog(data)
    .then(ui.onUpdateBlogSuccess)
    .then(onGetUserBlogs)
    .catch(ui.onUpdateBlogError)
}

const onGrabBlogId = function (event) {
  event.preventDefault()
  const dataId = $(this).parent().parent().parent().data('id')
  store.user.delete = dataId
}

const onDeleteBlog = function (event) {
  event.preventDefault()
  api.deleteBlog(store.user.delete)
    .then(ui.onDeleteBlogSuccess)
    .then(onGetUserBlogs)
    .catch(ui.onDeleteBlogFailure)
}

module.exports = {
  onGetAllBlogs,
  onCreateBlog,
  onGetUserBlogs,
  onShowBlog,
  onUpdateBlog,
  onGrabBlogId,
  onDeleteBlog
}
