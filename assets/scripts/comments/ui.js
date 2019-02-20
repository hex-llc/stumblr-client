const allCommentsTemplate = require('../templates/allCommentsTemplate.handlebars')

const onGetAllCommentsSuccess = (responseData) => {
  const allCommentsHtml = allCommentsTemplate({ comments: responseData.blog.comments })
  $(`#${responseData.blog._id}`).html(allCommentsHtml)
}

const onCreateCommentSuccess = (responseData) => {
}

module.exports = {
  onGetAllCommentsSuccess,
  onCreateCommentSuccess
}
