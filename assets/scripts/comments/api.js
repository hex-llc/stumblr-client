'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getAllComments = function () {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'GET'
  })
}

const createComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showComment = function (dataId) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + dataId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + store.user.comment._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteComment = function (commentId) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + commentId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token' + store.user.token
    }
  })
}

module.exports = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
  showComment
}
