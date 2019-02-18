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
  $('#auth-message').html('You have successfully created a Blog!')
}

const onCreateBlogFailure = () => {
  $('#auth-message').html('You have failed to create a Blog')
}

const onGetUserBlogsSuccess = (responseData) => {
  store.user_blogs = responseData.blogs
  const userBlogsHtml = allUserBlogsTemplate({ blogs: store.user_blogs.reverse() })
  $('.content').html(userBlogsHtml)
}

const onGetUserBlogsError = () => {
  $('#auth-message').html('Something went wrong and we can\'t get your blogs, sorry!')
}

module.exports = {
  onGetAllBlogsSuccess,
  onGetAllBlogsError,
  onCreateBlogSuccess,
  onCreateBlogFailure,
  onGetUserBlogsSuccess,
  onGetUserBlogsError
}
