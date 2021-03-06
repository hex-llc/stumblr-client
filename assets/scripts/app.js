'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const blogEvents = require('./blogs/events.js')
const commentEvents = require('./comments/events.js')
const store = require('./store')

// keep elements hidden which are gonna appear after signin
$('.after-signin, .on-action, .jumbotron').hide()
$('.alert').hide()
$('#home-btn, #profile-image-sidebar').hide()

$(() => {
  // index blogs once DOM object with .content is safe to manipulate
  $('.content').ready(blogEvents.onGetAllBlogs)
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
  $('#my-blogs-btn').on('click', () => {
    blogEvents.onGetUserBlogs('to my blogs')
    store.isInHome = false
  })
  // fetch all blogs
  $('#home-btn').on('click', () => {
    blogEvents.onGetAllBlogs('to home')
    $('#my-blogs-btn').show()
    store.isInHome = true
  })
  // clicking on edit button will run function 'onShowBlog' and use the data-id to find the blog._id
  $('.content').on('click', '.blog-edit-btn', blogEvents.onShowBlog)
  // clicking on `Update` button will submit info in form and run function 'onUpdateBlog'
  $('#update-blog-form').on('submit', blogEvents.onUpdateBlog)
  // clicking on delete button will run function 'onGrabBlogId' to find which blog to delete
  $('.content').on('click', '.blog-delete-btn', blogEvents.onGrabBlogId)
  // clicking on `Delete` button will submit ID from 'onGrabBlogId' and run function 'onDeleteBlog'
  $('#delete-blog-submit-btn').on('click', blogEvents.onDeleteBlog)
  // clicking `Comment` will run function `onCreateComment` to create a comment
  $('.content').on('submit', '.create-comment-form', commentEvents.onCreateComment)
  // clicking `Edit` will run function `onShowComment` to find which comment to edit
  $('.content').on('click', '.comment-edit-btn', commentEvents.onShowComment)
  // clicking on `Update` button will submit info in form and run function 'onUpdateComment'
  $('#update-comment-form').on('submit', commentEvents.onUpdateComment)
  // clicking `Delete` will run function `onGrabCommentId` to find id which comment to delete
  $('.content').on('click', '.comment-delete-btn', commentEvents.onGrabCommentId)
  // clicking on `Delete` button will submit ID from 'onGrabCommentId' and run function 'onDeleteComment'
  $('#delete-comment-submit-btn').on('click', commentEvents.onDeleteComment)

  // clear forms when sign-up collapsible is hidden
  $('#sign-up-collapsible').on('hidden.bs.collapse', function () {
    $('#sign-up').trigger('reset')
  })

  $('.modal').on('hidden.bs.modal', function () {
    // clear forms when modal is hidden
    $(this).find('form').trigger('reset')
  })

  // $('#logo').on('click', () => { blogEvents.onGetAllBlogs('to home') })

  $('body').on('click', '.expand-button', (event) => {
    const postID = event.target.dataset.id
    const postBody = $(`[data-id=${postID}]`).children('.blog-post-body')
    const expandButtonWrapper = $(`[data-id=${postID}]`).children('.expand-wrapper').children('div')

    if (postBody.hasClass('shrink-post')) {
      postBody.toggleClass('shrink-post', false)
      expandButtonWrapper.addClass('rotate-button')
    } else {
      postBody.toggleClass('shrink-post', true)
      expandButtonWrapper.removeClass('rotate-button')
    }
  })
})
