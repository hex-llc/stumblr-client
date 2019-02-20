const allCommentsTemplate = require('../templates/allCommentsTemplate.handlebars')

const onGetAllCommentsSuccess = (responseData) => {
  console.log(responseData)
  const allCommentsHtml = allCommentsTemplate({ comments: responseData. })
  $('.blog-post-comment-container').html(allCommentsHtml)
}
