'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')

// keep elements hidden which are gonna appear after signin
$('.after-signin').hide()
$('#auth-message-success, #auth-message-failure, #chngpw-message-failure, #create-blog-failure').hide()

$(() => {
  // index blogs once DOM object with .content is safe to manipulate
  $('.content').ready(blogEvents.onGetBlogs)
  // clicking on 'sign up' button will submit info in form and run function 'onSignUp'
  $('#sign-up').on('submit', authEvents.onSignUp)
  // clicking on 'sign in' button will submit info in form and run function 'onSignIn'
  $('#sign-in').on('submit', authEvents.onSignIn)
  // clicking on 'change password' button will submit info in form and run function 'onChangePw'
  $('#change-pw').on('submit', authEvents.onChangePw)
  // clicking on 'sign out' button will run function 'onSignOut'
  $('#sign-out').on('click', authEvents.onSignOut)
  // clicking on 'Create Blog' button will submit info in form and run 'onCreateBlog'
  $('#blog-form').on('submit', blogEvents.onCreateBlog)
  // fetch user's blogs
  $('#dashboard-btn').on('click', blogEvents.onGetUserBlogs)

  // clear forms when sign-up collapsible is hidden
  $('#sign-up-collapsible').on('hidden.bs.collapse', function () {
    $('#sign-up').trigger('reset')
  })

  $('.modal').on('hidden.bs.modal', function () {
    // clear forms when modal is hidden
    $(this).find('form').trigger('reset')
  })
})
