'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // store data to sign in after successful sign up
  store.credentials = data
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    // sign in after successful sign up
    .then(() => {
      // delete password confirmation from credentials to send credentials
      // for signing in properly
      delete store.credentials.password_confirmation
      // make a sign in request
      api.signIn(store.credentials)
        .then(ui.onSignInSuccess)
        .catch(ui.onSignInFailure)
    })
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // checking to see if input was a username or email
  const usernameOrEmail = data.credentials.email
  // if username is inputted, set email to null and created a username field in credentials
  if (usernameOrEmail.search('@') === -1) {
    data.credentials.username = usernameOrEmail
    data.credentials.email = null
  }
  //  const updated_data = data.credentials.username
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePw = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
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
