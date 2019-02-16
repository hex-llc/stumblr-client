'use strict'

const api = require('./api.js')
const formData = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  data = formData(event.target)
  api.signUp(data)
  .then(ui.onSignUpSuccess)
  .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  data = formData(event.target)
  api.signIn(data)
  .then(ui.onSignInSuccess)
  .catch(ui.onSignInFailure)
}

const onChangePw = function (event) {
  event.preventDefault()
  data = formData(event.target)
  api.changePw(data)
  .then(ui.onChangePwSuccess)
  .catch(ui.onChangePwFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
  .then(ui.onSignOutSuccess)
  .catch(ui.onSignOutFailure)
}


module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
