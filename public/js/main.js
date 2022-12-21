const socket = io();

socket.on('post', post => {
    console.log(post);
})