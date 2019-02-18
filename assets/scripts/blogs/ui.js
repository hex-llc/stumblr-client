'use strict'

const store = require('../store')
const allBlogsTemplate = require('../templates/allBlogsTemplate.handlebars')
const allUserBlogsTemplate = require('../templates/allUserBlogsTemplate.handlebars')

const onGetAllBlogsSuccess = (responseData) => {
  store.blogs = responseData.blogs
  const allBlogsHtml = allBlogsTemplate({ blogs: store.blogs.reverse() })
  $('.content').html(allBlogsHtml)
}

const onGetAllBlogsError = () => {
  $('#auth-message').html('Something went wrong and we can\'t get all blogs, sorry!')
}

const onCreateBlogSuccess = () => {
  $('#auth-message-success').html('<P>Your blog has been <strong>posted!</strong></p>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  $('#create-blog').modal('hide')
}

const onCreateBlogFailure = () => {
  $('#create-blog-failure').html('<P>Failure! Make sure you have a <strong>title</strong> and a<strong> body</strong>!</p>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
}

const onGetUserBlogsSuccess = (responseData) => {
  store.user.blogs = responseData.blogs
  const userBlogsHtml = allUserBlogsTemplate({ blogs: store.user.blogs.reverse() })
  $('.content').html(userBlogsHtml)
}

const onGetUserBlogsError = () => {
  $('#auth-message').html('Something went wrong and we can\'t get your blogs, sorry!')
}

const onShowBlogSuccess = (responseData) => {
  store.user.blog = responseData.blog
  console.log(store.user)
  console.log(store.user.blog)
}

const onShowBlogError = () => {
  console.log('Error on show!')
}

module.exports = {
  onGetAllBlogsSuccess,
  onGetAllBlogsError,
  onCreateBlogSuccess,
  onCreateBlogFailure,
  onGetUserBlogsSuccess,
  onGetUserBlogsError,
  onShowBlogSuccess,
  onShowBlogError
}
