//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require('mongoose');

const homeContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// DB Related Work
const connectionString = "mongodb://localhost:27017/blogsDB";
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true});

// Creating schema for our blogs
const blogSchema = new mongoose.Schema({
  title : String,
  content : String
});

const Blog = mongoose.model("Blog", blogSchema);



app.get("/", function(req ,res) {
  Blog.find({}, function(err, results) {  
    if(!err && results.length != 0) {
      res.render("home", {homeStart : homeContent, posts: results, _ : _ });
    }
    else{
      res.render("home", {homeStart : homeContent, posts : [], _ : _});
    }
  });
});

app.get("/about", function(req, res) {
  res.render("about", {about : aboutContent});
});

app.get("/contact", function(req, res) {
  res.render("contact", {contact : contactContent});
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.get("/posts/:_id", function(req, res) {
  let _id = req.params._id;
  Blog.findById(_id, function(err, result) {
    if(!err) {
      res.render("post", {title : result.title, content : result.content});
    }
    else{
      res.send("<h1>Error 404</h1>");
    }
  })
  
  // let matchedPost
  // posts.forEach(i => {
  //   if(_.lowerCase(route) == _.lowerCase(i.title)){
  //     found = true;
  //     matchedPost = i;
  //   }
  // });
  //   if(found){
  //     res.render("post", {title : matchedPost.title, content : matchedPost.blog});
    // }
    
});

app.post("/compose", function(req, res) {
  const newPost = new Blog({
    title : req.body.title, 
    content : req.body.blog,
  });
  newPost.save(function (err, result) {
    if(result){
      res.redirect("/");
    }
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
