'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getAllBlogs = function () {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'GET'
  })
}

const createBlog = function (data) {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getUserBlogs = function () {
  return $.ajax({
    url: config.apiUrl + '/user-blogs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showBlog = function (dataId) {
  return $.ajax({
    url: config.apiUrl + '/blogs/' + dataId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAllBlogs,
  createBlog,
  getUserBlogs,
  showBlog
}
