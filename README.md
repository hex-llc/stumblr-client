[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Stumblr. Web Application

Stumblr. is a microblogging website created by [@macitege](https://github.com/macitege), [@rogerdunnGA](https://github.com/rogerdunnGA), [@MaxxKowalik](https://github.com/MaxxKowalik), and [@discocisco](https://github.com/discocisco). Anyone can view the website and read a collection of blogs made by great people, for great people. The back-end was developed using combination of Express.js, Mongoose, and MongoDB. The front-end was developed using JavaScript and jQuery commands to communicate with the Stumblr. API and display changes to the web application in real-time for the viewer. Anyone that views the application is able to read through any successfully created blog as well as the comments associated with that blog, if there are any comments to show. In order to create a blog or comment, users will have to create an account and then sign in. All accounts, blogs, and comments are stored within the API developed in the back-end.

- [View the client here!](https://hex-llc.github.io/stumblr-client)
- [View the API here!](https://stumblr-api.herokuapp.com)

## Technologies used

- Hypertext Markup Language (HTML)
- Cascading Style Sheets (CSS)
- Sass (SCSS)
- JavaScript
- Ajax language
- jQuery
- Bootstrap
- Handlebars
- Git
- cURL
- API [(view the repo here.)](https://github.com/hex-llc/stumblr-api)

## Development process and strategy

The focus of this project was to first establish foundational code and structure as a group before separating. Then, each developer was allocated unique features, either individually or as some combination of team members. Each unique feature was taken through a similar practice of the following:
- Test feature through `cURL` scripts.
- Create necessary forms, buttons, or sections in `index.html` for feature location.
- Write `jQuery` calls that initialize handling of target events.
- Organize and structure the events necessary for the feature.
- Send API calls as necessary to reflect user events in the API developed in the back end.
- Display events or text for user interaction on the front end.
- When completed, determine if a file using `.handlebars` would be efficient for readability and DRY-focused code.
- Style the features and return to the top of flow-chain to ensure feature works as intended.

## Future feature additions
- Following other users as 'Friends' with the ability to view another user's blogs without the ability to make any changes to the blogs themselves.
- 'Likes' on blogs to display a counter of the amount of users who like a blog
- Uploading photos:
  - Adding a photo for a user's profile photo.
  - Adding photos within blogs and comments.
- Formatting the text within the body of a blog so that basic font and paragraph formatting is shown as valid `html`.
- Search field to find specific blogs or comments.
- Ability to view all your comments and which blogs they reside in.
- Themes saved for each successfully created blogger so that the background color can be personalized to a user's preference.
- Accessability features such as labels in forms, alt-text, etc.
- Responsive design for screens of varying size.

### Wireframes and user stories

1. [ ] [Wireframes located here.](https://imgur.com/a/RRrC0qm)
1. [ ] User stories:
  - As an unregistered user, I would like to sign up with email and password.
  - As a registered user, I would like to sign in with email and password.
  - As a signed in user, I would like to change password.
  - As a signed in user, I would like to sign out.
  - As an unregistered user, I would like to see all users blog posts.
  - As an unregistered user, I would like to see comments on those blog posts.
  - As a signed in user, I would to create blog posts.
  - As a signed in user, I would to comment on other users' blog posts.
  - As a signed in user, I would to update my blog posts and comments.
  - As a signed in user, I would to delete my blog posts and comments.
