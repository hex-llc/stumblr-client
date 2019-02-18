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

module.exports = {
  getAllBlogs,
  createBlog
}
