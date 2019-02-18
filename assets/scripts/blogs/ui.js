'use strict'

const store = require('../store')
const allBlogsTemplate = require('../templates/allBlogsTemplate.handlebars')

const onGetAllBlogsSuccess = (responseData) => {
  store.blogs = responseData.blogs
  const allBlogsHtml = allBlogsTemplate({ blogs: store.blogs })
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

module.exports = {
  onGetAllBlogsSuccess,
  onGetAllBlogsError,
  onCreateBlogSuccess,
  onCreateBlogFailure
}
