// JavaScript file housing the interactions of the homepage file

// Pulling username from URL params
const URLPath = window.location.href;
console.log(URLPath);
const username = URLPath.split('/')[4];
console.log(username); // gives username back after city/$username

// Variable Array Storing Information Needed for User
let userData

// Use username to fetch data required for homepage -- Need new get route made in home-route
async function getUserInfo() {
    
    const data = await fetch('/api/user/getdata', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username})
    });

    const user = await data.json();
    console.log(user);
    userData = {
        creator_id: user.id,
        username: user.username,
        location: user.location,
    };

    console.log(userData);
};
getUserInfo();

// Fetch POST requests 







// Making Create Post Button Operate Pop-Out
const createbtn = document.getElementById("create-btn"); // Creatbtn object found by ID
createbtn.addEventListener('click', (e) => { // Event listener function when clicked
    setTimeout(function () {
        const popupbox = document.getElementById('create-post-form');
        popupbox.classList.remove('d-none');
    }, 150);
});

// Exit button out of creating a post
const closebtn = document.getElementById('closebtn');
closebtn.addEventListener('click', (e) => {
    setTimeout(function() {
        const popupbox = document.getElementById('create-post-form');
        popupbox.classList.add('d-none');
    }, 150);
});

// Post request when submitting a comment - requires title and comment body
const submitbtn = document.getElementById('submitbtn');
submitbtn.addEventListener('click', (e) => {
    let id = 001; // I don't need to add this correct as it's the primary key and should auto increment when posted
    let creator_id = 001; // This is the foreign key, and should be retrieved from teh database when the client is logged in
    let post_title = document.getElementById('posttitle');
    let post_text = document.getElementById('postcontent');
    let city_name = 'Salt Lake City'; // This will be retrieved from the query    

    // Post request here after 
    const newPost = {
        creator_id: creator_id,
        title: post_title.value,
        text: post_text.value,
        city: city_name
    };

    savePost(newPost);
})

// Basic fetch request to weather API
const weatherapikey = '40f04d918b53d1a8a149e5f84300b159'; // key needed to make fetch call
let weatherinfo
const city = 'Salt Lake City';
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} // call by city
async function getWeather() {
await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherapikey}&units=imperial`)
        .then((response) => response.json())
        .then(await function(data) {
            let temp = data.main.temp;            ;
            let windspd = data.wind.speed;
            let icon = data.weather[0].icon;
            let description = data.weather[0].description;

            weatherinfo = {
                temp: temp,
                windspd: windspd,
                icon: icon,
                description: description
            };
            
            return weatherinfo;         
        })
}

async function renderWeather() {
    await getWeather()

    const temp = document.getElementById('temperature');
    const weathericon = document.getElementById('weathericon');
    const weatherdescription = document.getElementById('weatherdescription');
    const windspd = document.getElementById('windspd');

    temp.innerHTML = `Temperature: ${weatherinfo.temp} °F`;
    weathericon.src = `https://openweathermap.org/img/wn/${weatherinfo.icon}.png`;
    weathericon.alt = `${weatherinfo.description}`;
    weatherdescription.innerHTML = `Weather: ${weatherinfo.description}`;
    windspd.innerHTML = `Wind Speed: ${weatherinfo.windspd} mph`;
}
renderWeather();



// News Column
newsapikey = '44d40cc667d343519a9845f04327121d';










