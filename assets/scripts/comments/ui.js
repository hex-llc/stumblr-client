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
  $('#auth-message-success').html('<P>Your comment has <strong>successfully posted!</strong>.</p>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
}

const onCreateCommentFailure = (responseData) => {
  $('.create-comment-form').trigger('reset')
  $('#auth-message-failure').html('<P>Your comment has <strong>failed!</strong>. Please try again</p>').fadeIn(500)
  setTimeout(() => $('#auth-message-failure').fadeOut(500), 2000)
}

module.exports = {
  onGetAllCommentsSuccess,
  onCreateCommentSuccess,
  onCreateCommentFailure
}
