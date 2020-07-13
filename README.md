[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

## CineMentality
 
A site to search for triggers in movies for those with mental health issues. 

# Motivation

As a person with mental health struggles I want to be able to look up movies by triggers I might like to avoid, and find out if they offer any level of catharsis. When I search for a movie in the database, I want it to return a result with the movie title, catharsis rating, trigger rating, and list of potential triggers.  
    
# Installation
  `npm install express`
  
  `npm install express-handlebars`
  
  `npm install sequelize`
  
  `npm install bcryptjs`
  
  `node server.js`
  
  `npm install dotenv`
  
Then launch from localhost:9000 in the browser
    
    
# Usage

Before you start searching, feel free to head to the sign up page and become a member! Once you're all signed up you'll be free to browse to your heart's content and leave your own reviews. You can use your sign-in in the member's review page whenever you come back. 

![sign up](https://media.giphy.com/media/f8PIeyIqhDdzLbuXd1/giphy.gif)

Head on over to the search page, and type in a film. Voila!

![search](https://media.giphy.com/media/VIchiYzhc5cuGTcMSO/giphy.gif)

If you'd like to leave a review, there's a link under the movie info. Click that, and you can rate a film based on trigger rating and catharsis rating. 

![rating](https://media.giphy.com/media/WOTtTUlFPtC1oevXwG/giphy.gif)

# Technologies Used
* Rotten Tomatoes API 
* IMDB API
* Passport
* MySQL
* Express 
* Sequelize
* Handlebars

# Credits 
[Jesse Audie](https://github.com/audijej)

[Joesph Brimeyer](https://github.com/josephbrimeyer)

# Testing
We used Travis CI. To get started you'll need to do the following.
1. Go to Travis-ci.com and Sign up with GitHub.
1. Accept the Authorization of Travis CI. You’ll be redirected to GitHub.
1. Click on your profile picture in the top right of your Travis Dashboard, click Settings and then the green Activate button, and select the repositories you want to use with Travis CI.
1. Add a .travis.yml file to your repository to tell Travis CI what to do. The following example specifies a Ruby project that should be built with Ruby 2.2 and the latest versions of JRuby.
1. Add the .travis.yml file to git, commit and push to trigger a Travis CI build
1. Check the build status page to see if your build passes or fails according to the return status of the build command by visiting Travis CI and selecting your repository.

# License
This project is licensed under the MIT License.
