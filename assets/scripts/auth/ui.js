const store = require('../store')

const onSignUpSuccess = () => {
  $('#auth-message').html('You have successfully signed up')

}

const onSignUpFailure = () => {
  $('#auth-message').html('You have failed to sign up')
}

const onSignInSuccess = (responseData) => {
  $('#auth-message').html('You have successfully signed in')
  store.user = responseData.user
}

const onSignInFailure = () => {
  $('#auth-message').html('You have failed to sign in')
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
