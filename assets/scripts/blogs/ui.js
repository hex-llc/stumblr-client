const store = require('../store')

const onCreateBlogSuccess = () => {
  $('#auth-message').html('You have successfully created a Blog!')
}

const onCreateBlogFailure = () => {
  $('#auth-message').html('You have failed to create a Blog')
}

// const onSignInSuccess = (responseData) => {
//   $('#auth-message').html('You have successfully signed in')
//   store.user = responseData.user
// }
//
// const onSignInFailure = () => {
//   $('#auth-message').html('You have failed to sign in')
// }
//
// const onChangePwSuccess = () => {
//   $('#auth-message').html('You have successfully changed password')
// }
//
// const onChangePwFailure = () => {
//   $('#auth-message').html('You have failed to change password')
// }
//
// const onSignOutSuccess = () => {
//   $('#auth-message').html('You have successfully signed out')
//   store.user = null
// }
//
// const onSignOutFailure = () => {
//   $('#auth-message').html('You have failed to sign out')
// }

module.exports = {
  onCreateBlogSuccess,
  onCreateBlogFailure
  // onSignInSuccess,
  // onSignInFailure,
  // onChangePwSuccess,
  // onChangePwFailure,
  // onSignOutSuccess,
  // onSignOutFailure
}
