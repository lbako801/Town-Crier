const User = require("./user");
const Post = require("./Post");
const City = require("./City");
const Comment = require("./Comment");
// Post User
Post.belongsTo(User, {
  foreignKey: "creator_id",
});
User.hasMany(Post, {
  foreignKey: "creator_id",
});
// Post Comment
Post.hasMany(Comment, {
  foreignKey: "post_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
// City User
City.hasMany(User, {
  foreignKey: "location",
});
User.belongsTo(City, {
  foreignKey: "location",
});
// Post City
Post.belongsTo(City, {
  foreignKey: "city_name",
});
City.hasMany(Post, {
  foreignKey: "city_name",
});

module.exports = { User, Post, City, Comment };
