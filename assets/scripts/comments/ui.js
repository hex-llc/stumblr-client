const allCommentsTemplate = require('../templates/allCommentsTemplate.handlebars')
const store = require('../store')

const onGetAllCommentsSuccess = (responseData) => {
  const allCommentsHtml = allCommentsTemplate({ comments: responseData.blog.comments })
  $(`#${responseData.blog._id}`).html(allCommentsHtml)
  if (store.user) {
    $('.create-comment-form').removeAttr('hidden')
  }
}

const onCreateCommentSuccess = (responseData) => {
  $('.create-comment-form').trigger('reset')
}

const onCreateCommentFailure = (responseData) => {
  $('.create-comment-form').trigger('reset')
  // TO DO: There should be a failure message...
}

module.exports = {
  onGetAllCommentsSuccess,
  onCreateCommentSuccess,
  onCreateCommentFailure
}
