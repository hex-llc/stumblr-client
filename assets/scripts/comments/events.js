'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const store = require('../store.js')
const blogApi = require('../blogs/api.js')

const onGetAllComments = function () {
  const blogId = $(event.target).children('button').data('id')
  blogApi.showBlog(blogId)
    .then(ui.onGetAllCommentsSuccess)
    .catch(ui.onGetAllCommentsFailure)
}

const onGetBlogComments = function () {
  api.getBlogComments()
    .then(ui.onGetBlogCommentsSuccess)
    .catch(ui.onGetBlogCommentsFailure)
}

const onCreateComment = function (event) {
  event.preventDefault()
  const blogId = $(event.target).children('button').data('id')
  const data = getFormFields(event.target)
  data.comment.blog = blogId
  data.comment.owner = store.user
  console.log(data)
  api.createComment(data)
    .then(ui.onCreateCommentSuccess)
    .then(() => onGetAllComments)
    .catch(ui.onCreateCommentFailure)
}

const onShowComment = function (event) {
  event.preventDefault()
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateComment(data)
    .then(ui.onUpdateCommentSuccess)
    .catch(ui.onUpdateCommentFailure)
}

const onDeleteComment = function (event) {
  event.preventDefault()
  api.deleteComment(store.user.delete)
    .then(ui.onDeleteBlogSuccess)
    .catch(ui.onDeleteBlogFailure)
}
module.exports = {
  onGetAllComments,
  onCreateComment,
  onShowComment,
  onUpdateComment,
  onDeleteComment,
  onGetBlogComments
}
