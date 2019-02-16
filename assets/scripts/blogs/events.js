'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onCreateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createBlog(data)
    .then(ui.onCreateBlogSuccess)
    .catch(ui.onCreateBlogFailure)
}

// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signIn(data)
//     .then(ui.onSignInSuccess)
//     .catch(ui.onSignInFailure)
// }
//
// const onChangePw = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changePw(data)
//     .then(ui.onChangePwSuccess)
//     .catch(ui.onChangePwFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.onSignOutSuccess)
//     .catch(ui.onSignOutFailure)
// }

module.exports = {
  onCreateBlog
  // onSignIn,
  // onChangePw,
  // onSignOut
}
