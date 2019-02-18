'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

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

const onGetUserBlogs = function (event) {
  event.preventDefault()
  api.getUserBlogs()
    .then(ui.onGetUserBlogsSuccess)
    .catch(ui.onGetUserBlogsError)
}

module.exports = {
  onGetBlogs,
  onCreateBlog,
  onGetUserBlogs
}
