'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const store = require('../store.js')
const blogApi = require('../blogs/api.js')

const onGetAllComments = function (blogId) {
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
  store.blogId = blogId
  data.comment.owner = store.user
  data.blog = store.blogId
  api.createComment(data)
    .then(ui.onCreateCommentSuccess)
    .then(() => onGetAllComments(blogId))
    .catch(ui.onCreateCommentFailure)
}

const onShowComment = function (event) {
  event.preventDefault()
  const commentId = $(this).parent().data('id')
  const commentBlogId = $(this).parent().data('blog')
  store.user.commentEditBlogId = commentBlogId
  api.showComment(commentId)
    .then(ui.onShowCommentSuccess)
    .catch(ui.onShowCommentError)
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateComment(data)
    .then(ui.onUpdateCommentSuccess)
    .then(() => onGetAllComments(store.user.commentEditBlogId))
    .catch(ui.onUpdateCommentFailure)
}

const onGrabCommentId = function (event) {
  event.preventDefault()
  const commentId = $(this).parent().data('id')
  store.user.commentDelete = commentId
  const commentBlogId = $(this).parent().data('blog')
  store.user.blogCommentDelete = commentBlogId
}

const onDeleteComment = function (event) {
  event.preventDefault()
  api.deleteComment(store.user.commentDelete)
    .then(ui.onDeleteCommentSuccess)
    .then(() => onGetAllComments(store.user.blogCommentDelete))
    .catch(ui.onDeleteCommentFailure)
}

module.exports = {
  onGetAllComments,
  onCreateComment,
  onShowComment,
  onUpdateComment,
  onDeleteComment,
  onGetBlogComments,
  onGrabCommentId
}
