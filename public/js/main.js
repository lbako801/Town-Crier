const messageBox = document.getElementById('message-box')

const socket = io();

socket.on('post', post => {
    console.log(post);
})

socket.on('message', message => {
    console.log(message);
    displayMsg();
})

messageBox.addEventListener('submit', (e) => {

    e.preventDefault();

   //grabs message text from form on html
    const msg = e.target.elements.msg.value;

    //emits message box value to server
    socket.emit('messageBoxText', msg);
});

function displayMsg(message) {

}