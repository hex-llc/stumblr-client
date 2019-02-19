'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onGetAllComments = function () {
  api.getAllComments()
    .then(ui.onGetAllCommentsSuccess)
    .catch(ui.onGetAllCommentsFailure)
}

const onCreateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createComment(data)
    .then(ui.onCreateCommentSuccess)
    .then(onGetAllComments)
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
  onDeleteComment
}
