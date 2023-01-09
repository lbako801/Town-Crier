# Town Crier   ![License badge](https://img.shields.io/badge/License-MIT-green)

## Description

Town Crier is a localized chat app where people are put into chatrooms with people from their city. You can post on your town page or you can open someones post to read or make a comment. This app features a session cookie for login authorization. Bootstrap for css. Socket.io for post notifications. And a database for post and user data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
    
## Installation

You can find our live page at: https://town-crier-app.herokuapp.com/.

To create your own local server using express and mysql. Put your database info into the .env file. Then open a terminal on server.js and run an ```npm i``` command. Enter ```mysql -u root -p``` in your terminal to open your mysql shell. Then run ```SOURCE db/schema.sql```. This sets up the database. You can use ```exit``` to leave to mysql shell. Exit the shell and run ```node seeds/index.js``` in your terminal to seed your database. Finally enter ```npm start``` into your terminal to start the server. Open your browser and go to ```"localhost:3000/login"``` to find the login page in order to access the app.

## Usage

You can visit the page live at https://town-crier-app.herokuapp.com/. 

Town Crier repo: https://github.com/lbako801/Town-Crier.

Click create new post to add a post to your town page.

Or click on a post to open the post and see the comments.
 
Click the create new comment button to add a comment to the post.
  
To get back to the town page use your browsers back arrow until the town page comes back. You will be logged out automatically after 24 hours.

## License

This project uses an MIT license.

## Contributing




## Questions

If you have any questions you can find our team on github.

 - [Loren Bako](https://github.com/lbako801)
 - [Matthew Gaskins](https://github.com/mgaskins17)
 - [Ethan Sorenson](https://github.com/EfSoren)
 - [Jacob Aston](https://github.com/Jacob-Aston)

---