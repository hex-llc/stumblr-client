'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onGetAllBlogs = function (pageChange) {
  api.getAllBlogs()
    .then(ui.onGetAllBlogsSuccess)
    // .then(() => {
    //   if (pageChange === true) {
    //     $('.on-action').show().html(`<h1> Home Page </h1>`)
    //     setTimeout(() => { $('.on-action').fadeOut(500) }, 500)
    //   } else if (pageChange === 'sign out') {
    //     $('.on-action').show().html(`<h1> 👋 Bye! </h1>`)
    //     setTimeout(() => { $('.on-action').fadeOut(500) }, 500)
    //   }
    // })
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
    // .then(() => {
    //   if (pageChange) {
    //     $('.on-action').show().html(`<h1> My Posts </h1>`)
    //     setTimeout(() => { $('.on-action').fadeOut(500) }, 500)
    //   }
    // })
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
