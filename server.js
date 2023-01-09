const path = require("path");
const http = require("http");
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const socketio = require("socket.io");
const routes = require("./controllers");
const session = require("express-session");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Telling server to use the static pages (handlebars) in the public folder
const sessionInfo = {
  secret: "secrettext",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionInfo));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("static"));
app.use(routes);

//Following code happens whenever a connection is made, including new users
//trying to get image to work
app.get("/static", (req, res) => {
  res.render("static");
});

io.on("connection", (socket) => {
  console.log("New connection");
  socket.emit("post", "testing socket.io post");

  //socket disconnect message test
  socket.on("disconnect", () => {
    io.emit("message", "testing disconnect");
  });

  //listens for chat messages and sends them to the server
  socket.on("messageBoxText", (msg) => {
    io.emit("message", msg);
    console.log(msg);
  });
});

// Setting server PORT as 3000 OR the environmental port

const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(Now listening on port ${PORT}));
});