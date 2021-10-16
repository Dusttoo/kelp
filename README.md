# kelp
https://kelp-reviews.herokuapp.com

## Summary of what the project is and what it does
* Kelp is an app created for all of the citizens of Bikini Bottom to discover their favorite
(and worst) businesses in the area. It is a clone of Yelp. Non members of the site have the ability to
search for a business and view that businesses information and any questions or reviews related to that business.
A non member also has the ability to view all of the businesses and sort businesses by their category.
A logged in member has acces to all of the above functionality as well as the ability to post their own business, post a review for a business,
and ask a question about a business.

## Welcome to Kelp!
![Imgur](https://media.giphy.com/media/SCFyCn49F8VPGnQUPQ/giphy.gif)


## Add a review
![Imgur](https://media.giphy.com/media/mfawppMU6BLyf4MdlL/giphy.gif)


## Instructions on how to build/run the project (installation instructions)
* To start the app on your local machine you must first do an npm install on both the front and backend folders.
* You then need to create a user in psql matching the username provided in the .env-example folder
* Then you can migrate the database using ```npx dotenv sequelize db:migrate``` and seed
using ```npx dotenv sequelize db:migrate```

## List of techs/languages/plugins/APIs used
* This application uses express to host the backend server and sequelize to communicate with the database.
* On the frontend it uses React along with Redux.
* The Google Map API

## To-dos/future features
### In the future I would like to implement: 
* The ability for users to answer questions that have been posted
* An account page for users
* The ability to connect with other users via a friends list and feed
* The ability to search the map for businesses

## Road Blocks
This project was a ton of fun and I enjoyed having creative freedom to build something fun, yet ueseful. I did run into the occasional road block. The biggest being, learning the ins and outs of state. I had some struggles, primarily with the edit feature on reviews, with the page loading before the state had properly updated, and thus, an error was thrown. I was able to correct the issue by implementing a use effect on the business page that tracked the dispatch of the reviews on render.

## Rating Feature
![Imgur](https://media.giphy.com/media/ikRoUwQnGZ1QlVpoQE/giphy.gif)

The rating feature is something I am very proud of. I was able to implement it by spreading in 5 empty spaces to an array, and then mapping through that array. At each index of the array I add 1 to the rate of the previous star, giving me stars with ratings of 1-5. Then I return a button with the html code for a star. Each star has an onClick that sets the rating to the rate of that specific star. Each star also has a onMouseEnter and onMouseLeave that sets the hover to the value of either that star or the set rating. If the hover is less than or equal to the rate of that star it is given a css class of "on" which fills the star in. The remaining stars are given a class of "off" that leaves them empty. This allows for the hover effect when you scroll over stars.

## Search
![Imgur](https://media.giphy.com/media/rnyUZagTGCKrZ59Uh2/giphy.gif)


