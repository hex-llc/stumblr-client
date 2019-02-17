'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')

// keep elements hidden which are gonna appear after signin
$('.after-signin').hide()
$('#auth-message-success, #auth-message-failure, #chngpw-message-failure').hide()

$(() => {
  // clicking on 'sign up' button will submit info in form and run function 'onSignUp'
  $('#sign-up').on('submit', events.onSignUp)
  // clicking on 'sign in' button will submit info in form and run function 'onSignIn'
  $('#sign-in').on('submit', events.onSignIn)
  // clicking on 'change password' button will submit info in form and run function 'onChangePw'
  $('#change-pw').on('submit', events.onChangePw)
  // clicking on 'sign out' button will run function 'onSignOut'
  $('#sign-out').on('click', events.onSignOut)
  // clicking on 'Create Blog' button will submit info in form and run 'onCreateBlog'
  $('#blog-form').on('submit', blogEvents.onCreateBlog)

  // clear forms when sign-up collapsible is hidden
  $('#sign-up-collapsible').on('hidden.bs.collapse', function () {
    $('#sign-up').trigger('reset')
  })

  // clear forms when change-pw modal is hidden
  $('#change-password-modal').on('hidden.bs.modal', function () {
    $('#change-pw').trigger('reset')
  })
})
