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
    .catch(ui.onCreateBlogFailure)
}

module.exports = {
  onGetBlogs,
  onCreateBlog
}
