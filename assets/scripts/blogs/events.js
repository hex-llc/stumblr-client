'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onGetBlogs = function () {
  api.getAllBlogs()
    .then(ui.onGetAllBlogsSuccess)
    .catch(ui.onGetAllBlogsError)
}

const onCreateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createBlog(data)
    .then(ui.onCreateBlogSuccess)
    .then(onGetBlogs)
    .catch(ui.onCreateBlogFailure)
}

const onGetUserBlogs = function () {
  api.getUserBlogs()
    .then(ui.onGetUserBlogsSuccess)
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
  onGetBlogs,
  onCreateBlog,
  onGetUserBlogs,
  onShowBlog,
  onUpdateBlog,
  onGrabBlogId,
  onDeleteBlog
}
