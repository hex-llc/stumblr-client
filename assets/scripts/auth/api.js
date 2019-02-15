'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: POST,
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: POST,
    data: data
  })
}

const changePw = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: PATCH,
    header: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: DESTROY,
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
