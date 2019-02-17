const store = require('../store')

const onSignUpSuccess = () => {
  // Message Actions
  $('#auth-message-success').html('<strong>Signed up!</strong> and <br/>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = () => {
  $('#auth-message-failure').text('Sign up failed! Try again.').fadeIn(500)
  setTimeout(() => $('#auth-message-failure').fadeOut(500), 2000)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  // Message Actions
  // appends the message if sign in action happened after sign up
  $('#auth-message-success').text('Signed in!').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  // a more concise way to hide and show stuff
  $('.after-signin').fadeIn(1000)
  $('.before-signin').hide()
  $('#sign-in').trigger('reset')
}

const onSignInFailure = () => {
  $('#auth-message-failure').text('Sign in failed! Try again.').fadeIn(500)
  setTimeout(() => $('#auth-message-failure').fadeOut(500), 2000)
  $('#sign-in').trigger('reset')
}

const onChangePwSuccess = () => {
  $('#auth-message-success').text('Password is changed!').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  $('#chngpw-message-failure').fadeOut(500)
  $('#change-pw').trigger('reset')
  $('#change-password-modal').modal('hide')
}

const onChangePwFailure = () => {
  $('#chngpw-message-failure').text('Password change is failed! Try again.').fadeIn(500)
  $('#change-pw').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#auth-message-success').text('Signed out!').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  store.user = null
  // this asynchronous function is to make sign in and sign up
  // forms appear AFTER the auth box expands slowly
  setTimeout(() => {
    $('.before-signin').fadeIn(200)
  }, 500)
  $('.after-signin').fadeOut(500)
  $('#sign-up-collapsible').collapse('hide')
}

const onSignOutFailure = () => {
  $('#auth-message-failure').text('Sign out failed!').fadeIn(500)
  setTimeout(() => $('#auth-message-failure').fadeOut(500), 2000)
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
