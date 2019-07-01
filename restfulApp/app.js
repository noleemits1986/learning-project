var express = require("express"),
    app     = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");
    

var ObjectId = require('mongoose').Types.ObjectId;



//app config
mongoose.connect('mongodb://localhost:27017/restful_app', { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


//mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    image: String,
    created:  {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//restul routs
app.get("/", function(req, res) {
    res.redirect("blogs");
});
//index rout
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("There is something wrong");
        }else{
            res.render("index", {blogs: blogs})
        }
    })
    
    
});

//new rout
app.get("/blogs/new", function(req, res){
   res.render("new");
});

//create rout
app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
    if (err){
        res.render("new");
    }else{
        res.redirect("/blogs")
    }
   });

});

//show rout
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show", {blog: foundBlog});
        }
    });
});

//Edit rout
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.render("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
})






































app.listen(process.env.PORT, process.env.IP, function () {
    console.log("hello");
});
