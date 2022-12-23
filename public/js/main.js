const messageBox = document.getElementById('message-box')
const chatMessages = document.querySelector('.chat-messages');

const socket = io();

socket.on('post', post => {
    console.log(post);
})

//message output from server input
socket.on('message', message => {
    console.log(message);
    displayMsg(message);
})

messageBox.addEventListener('submit', (e) => {

    e.preventDefault();

   //grabs message text from form on html
    const msg = e.target.elements.msg.value;
    console.log(msg);

    //emits message box value to server
    socket.emit('messageBoxText', msg);

    //clears form for ease of testing
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

//output message to DOM

function displayMsg(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML=`<p class="text">${message}</p>`;
    document.querySelector('.chat-messages').appendChild(div);
}