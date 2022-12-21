const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app)
const io = socketio(server);

//Telling server to use the static pages (handlebars) in the public folder
app.use(express.static(path.join(__dirname,'public')));

//Following code happens whenever a connection is made, including new users
io.on('connection', socket => {
    console.log('New connection');
    socket.emit('post', 'testing socket.io post')
})

// Setting server PORT as 3000 OR the environmental port
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
