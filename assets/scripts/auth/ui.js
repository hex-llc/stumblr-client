const store = require('../store')

const onSignUpSuccess = () => {
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
  $('#auth-message-success').text('Signed in!').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  // a more concise way to hide and show stuff
  $('.after-signin').fadeIn(1000)
  $('.before-signin').hide()
  $('#sign-in').trigger('reset')
  $('#greet-message').html('<p> > Hello, <strong><em>' + store.user.username + '</em></strong></p>')
  $('#modal-title').html(`What would you like to share, <strong><em>${store.user.username}</em></strong>?`)
  $('.create-comment-form').removeAttr('hidden')
  $(`[data-user=${store.user.username}]`).removeAttr('hidden')
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
  setTimeout(() => {
    $('.before-signin').fadeIn(200)
  }, 500)
  $('.after-signin, #home-btn').fadeOut(500)
  $('#sign-up-collapsible').collapse('hide')
  $('#greet-message').text('')
  $('.create-comment-form, .comment-post-edit').attr('hidden', 'true')
  $('html, body').animate({ scrollTop: 0 }, 2000)
  $('.jumbotron').hide()
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
