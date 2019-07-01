let express = require("express"),
    app     = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");
    
mongoose.connect('mongodb://localhost:27017/restful_appV2', { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


    
 //mongoose model config
 let blogSchema = new mongoose.Schema ({
     title: String,
     image: String,
     body: String,
     created: {type: Date, default: Date.now}
     
 });   

let Blog = mongoose.model("Blog", blogSchema);


    //restful routs
     app.get("/", function (req, res){
        
        res.redirect("blogs");
    });
    //index
    app.get("/blogs", function (req, res){
        Blog.find({}, function (err, blogs){
            if(err){
                console.log("error");
            }else{
                res.render("index", {blogs: blogs});
            }
        });
      
    });
    //new
    
    app.get("/blogs/new", function(req, res){
       res.render("new");
    });
    //post
    app.post("/blogs", function (req, res){
        //create blog
        Blog.create(req.body.blog, function(err, newBlog){
            if(err){
                res.render("new")
            }else{
                res.redirect("/blogs")
            }
        })
    });
    
    //show
    app.get("/blogs/:id", function (req, res){
    //   Blog.findById(req.params.id, function(err, foundBlog){
    //       if(err){
    //           res.redirect("/blogs");
    //       }else{
    //           res.render("show", {blog: foundBlog});
    //       }
    //   })
    res.render("show2");
    });
    
    //edit rout
    
    app.get("/blogs/:id/edit", function (req, res){
        Blog.findById(req.params.id, function(err, foundBlog){
            if(err){
                res.render("/blogs")
            }else{
                res.render("edit", {blog: foundBlog}) 
            }
        })
       
    });
    
    
    app.listen(process.env.PORT, process.env.IP, function () {
    console.log("hola");
});
