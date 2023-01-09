const URLPath = window.location.href;


// Making Create Post Button Operate Pop-Out
const createbtn = document.getElementById("create-btn"); // Creatbtn object found by ID
createbtn.addEventListener('click', (e) => { // Event listener function when clicked
    setTimeout(function () {
        const popupbox = document.getElementById('create-comment-form');
        popupbox.classList.remove('d-none');
    }, 150);
});

// Exit button out of creating a post
const closebtn = document.getElementById('closebtn');
closebtn.addEventListener('click', (e) => {
    setTimeout(function() {
        const popupbox = document.getElementById('create-comment-form');
        popupbox.classList.add('d-none');
    }, 150);
});

// Function for posting a fetch to server
function savePost(someitem) {
    fetch('/api/user/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(someitem)
    })
    .then(location.reload()) // reload window location after posting a post
}

const submitbtn = document.getElementById('submitbtn');
submitbtn.addEventListener('click', (e) => {
    const postId = URLPath.split('/')[4];
    let comment_text = document.getElementById('postcontent');

    // Post request here after 
    const newPost = {
        post_id: postId,
        comment_text: comment_text.value,
    };

    // Fetch request for posting a new post
    savePost(newPost)

    // Include closing create a post pop up after hitting submit

})
