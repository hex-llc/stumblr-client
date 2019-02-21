const allCommentsTemplate = require('../templates/allCommentsTemplate.handlebars')
const store = require('../store')

const onGetAllCommentsSuccess = (responseData) => {
  const allCommentsHtml = allCommentsTemplate({ comments: responseData.blog.comments })
  $(`#${responseData.blog._id}`).html(allCommentsHtml)
  if (store.user) {
    $('.create-comment-form').removeAttr('hidden')
    $(`[data-user=${store.user.username}]`).removeAttr('hidden')
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

const onShowCommentSuccess = (responseData) => {
  store.user.comment = responseData.comment
  $('#update-comment-text-input').val(`${store.user.comment.text}`)
}

const onShowCommentError = (responseData) => {
  $('#auth-message-failure').html('Something went wrong and we can\'t find that comment.')
}

const onUpdateCommentSuccess = (responseData) => {
  $('#auth-message-success').html('<p>Your comment has been <strong>updated!</strong></p>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  $('#update-comment').modal('hide')
}

const onUpdateCommentFailure = (responseData) => {
  $('#update-comment-failure').html('<p>Make sure you have <strong>text</strong>!</p>').fadeIn(500)
  setTimeout(() => $('#update-comment-failure').fadeOut(500), 1300)
}

const onDeleteCommentSuccess = (responseData) => {
  $('#auth-message-success').html('<p>Your comment has been <strong>removed!</strong></p>').fadeIn(500)
  setTimeout(() => $('#auth-message-success').fadeOut(500), 2000)
  $('#delete-comment').modal('hide')
}

const onDeleteCommentFailure = (responseData) => {
  $('#auth-message-failure').html('Something went wrong and we can\'t delete your comment, sorry!').fadeIn(500)
  setTimeout(() => $('#auth-message-failure').fadeOut(500), 2000)
  $('#delete-comment').modal('hide')
}

module.exports = {
  onGetAllCommentsSuccess,
  onCreateCommentSuccess,
  onCreateCommentFailure,
  onShowCommentSuccess,
  onShowCommentError,
  onUpdateCommentSuccess,
  onUpdateCommentFailure,
  onDeleteCommentSuccess,
  onDeleteCommentFailure
}
