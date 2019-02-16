const store = require('../store')

const onSignUpSuccess = () => {
  $('#auth-message').html('You have successfully signed up')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = () => {
  $('#auth-message').html('You have failed to sign up')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (responseData) => {
  $('#auth-message').html('You have successfully signed in')
  store.user = responseData.user
  $('#sign-out').removeAttr('hidden')
  $('#menu-button').removeAttr('hidden')
  $('#sign-in').trigger('reset')
  $('#auth-box').hide()
}

const onSignInFailure = () => {
  $('#auth-message').html('You have failed to sign in')
  $('#sign-in').trigger('reset')
}

const onChangePwSuccess = () => {
  $('#auth-message').html('You have successfully changed password')
}

const onChangePwFailure = () => {
  $('#auth-message').html('You have failed to change password')
}

const onSignOutSuccess = () => {
  $('#auth-message').html('You have successfully signed out')
  store.user = null
  $('#sign-out').attr('hidden', 'true')
  $('#menu-button').attr('hidden', 'true')
  $('#auth-box').fadeIn(100)
}

const onSignOutFailure = () => {
  $('#auth-message').html('You have failed to sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}
