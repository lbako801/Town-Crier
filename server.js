const path = require("path");
const http = require("http");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Telling server to use the static pages (handlebars) in the public folder

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("static"));
app.use(require("./controllers"));

//trying to get image to work
app.get("/static", (req, res) => {
  res.render("static");
});

// Setting server PORT as 3000 OR the environmental port
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
