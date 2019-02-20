'use strict'

const store = require('../store.js')
const allBlogsTemplate = require('../templates/allBlogsTemplate.handlebars')
const allUserBlogsTemplate = require('../templates/allUserBlogsTemplate.handlebars')

const onGetAllBlogsSuccess = (responseData) => {
  store.blogs = responseData.blogs
  const allBlogsHtml = allBlogsTemplate({ blogs: store.blogs.reverse() })
  $('.content').html(allBlogsHtml)
  // $('.container').hide()
  // setTimeout(() => {
  //   $('.content').html(allBlogsHtml)
  //   $('.container').fadeIn(200)
  // }, 500)
  $('#home-btn').hide()
  // If user is signed in and created a comment, this code keeps comment form
  // visible
  if (store.user) {
    $('.create-comment-form').removeAttr('hidden')
  }
}

const onGetAllBlogsError = () => {
  $('#auth-message-failure').html('Something went wrong and we can\'t get all blogs, sorry!')
}

const onCreateBlogSuccess = () => {
  $('#auth-message-success').html('<P>Your blog has been <strong>posted!</strong></p>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  $('#create-blog').modal('hide')
}

const onCreateBlogFailure = () => {
  $('#create-blog-failure').html('<P>Make sure you have a <strong>title</strong> and a<strong> body</strong>!</p>').fadeIn(500)
  setTimeout(() => $('#create-blog-failure').fadeOut(500), 1300)
}

const onGetUserBlogsSuccess = (responseData) => {
  store.user.blogs = responseData.blogs
  const userBlogsHtml = allUserBlogsTemplate({ blogs: store.user.blogs.reverse() })
  $('.content').html(userBlogsHtml)
  // $('.container').hide()
  // setTimeout(() => {
  //   $('.content').html(userBlogsHtml)
  //   $('.container').fadeIn(200)
  // }, 500)
  $('#my-blogs-btn').hide()
  $('#home-btn').show()
  // If user is signed in and created a comment, this code keeps comment form
  // visible
  if (store.user) {
    $('.create-comment-form').removeAttr('hidden')
  }
}

const onGetUserBlogsError = () => {
  $('#auth-message-failure').html('Something went wrong and we can\'t get your blogs, sorry!').fadeIn(500)
  setTimeout(() => $('#auth-message-failure').fadeOut(500), 2000)
}

const onShowBlogSuccess = (responseData) => {
  store.user.blog = responseData.blog
  $('#update-modal-title').html(`What would you like to update, <strong><em>${store.user.username}</em></strong>?`)
  $('#update-title-input').val(`${store.user.blog.title}`)
  $('#update-content-input').val(`${store.user.blog.body}`)
}

const onShowBlogError = () => {
}

const onUpdateBlogSuccess = () => {
  $('#auth-message-success').html('<P>Your blog has been <strong>updated!</strong></p>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  $('#update-blog').modal('hide')
}

const onUpdateBlogError = () => {
  $('#update-blog-failure').html('<P>Make sure you have a <strong>title</strong> and a<strong> body</strong>!</p>').fadeIn(500)
  setTimeout(() => $('#update-blog-failure').fadeOut(500), 1300)
}

const onDeleteBlogSuccess = () => {
  $('#auth-message-success').html('<P>Your blog has been <strong>removed!</strong></p>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  $('#delete-blog').modal('hide')
}

const onDeleteBlogError = () => {
  $('#auth-message-failure').html('Something went wrong and we can\'t update your blog, sorry!').fadeIn(500)
  setTimeout(() => $('auth-message-failure').fadeOut(500), 2000)
  $('#delete-blog').modal('hide')
}

module.exports = {
  onGetAllBlogsSuccess,
  onGetAllBlogsError,
  onCreateBlogSuccess,
  onCreateBlogFailure,
  onGetUserBlogsSuccess,
  onGetUserBlogsError,
  onShowBlogSuccess,
  onShowBlogError,
  onUpdateBlogSuccess,
  onUpdateBlogError,
  onDeleteBlogSuccess,
  onDeleteBlogError
}
