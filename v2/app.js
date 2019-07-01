let express = require ("express");
let app = express( );
let bodyParser = require("body-parser");
let mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });

//setup schema

let campgroundSchema = new mongoose.Schema ({
   name: String,
   image: String,
   description: String
});

let Campground = mongoose.model("campground", campgroundSchema);

// Campground.create({
//     name: "Saviours", 
//     image: "https://cdn.pixabay.com/photo/2018/05/10/15/40/woman-3387820__340.jpg",
//     description: "this is something weird"
// }, function (err, campground){
//     if (err){
//         console.log("error fool");
//     }else {
//         console.log("new campground")
//         console.log(campground)
//     }
// });




// let campgrounds = [
// {name: "Dawsons creek", image: "https://cdn.pixabay.com/photo/2018/08/12/08/04/dog-3600325__340.jpg"},
// {name: "Saviours", image: "https://cdn.pixabay.com/photo/2018/05/10/15/40/woman-3387820__340.jpg"},
// {name: "hilltop", image: "https://cdn.pixabay.com/photo/2018/02/20/11/49/bird-3167441__340.jpg"},

// ]


//index show all campgrounds

app.get("/campgrounds", function(req, res) {
    //get campgrounds from the database
    Campground.find({}, function(err, mongoCampgrounds){
        if(err){
            console.log("there is an error in the code");
        } else {
            res.render("index", {campgrounds: mongoCampgrounds});
        }
    });
        // res.render("campgrounds", {campgrounds: campgrounds});
});


//create add campgrounds to database
app.post("/campgrounds/", function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampgrounds={name: name, image: image, description: desc}
   //create a new compground
   Campground.create(newCampgrounds, function (err, newlyCreated){
       if(err){
           console.log("there is an error somewhere foo");
       }else{
             //redirect campground
    res.redirect("/campgrounds");
       }
     
   })
  
});


// show form to create new campbgrounds
app.get("/campgrounds/new", function(req, res){
res.render("new");
});


app.get("/campgrounds/:id", function(req, res){
    //find campground with provided id
   Campground.findById(req.params.id, function (err, foundCampground){
       if(err){
           console.log(err)
       }else{
           //render show template, will add it to the schema
           res.render("show", {campground: foundCampground});
       }
       
   });
    
  
});




app.listen(process.env.PORT, process.env.IP, function () {
    console.log('this has started');
});
