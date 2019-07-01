let express = require ("express");
let app = express( );
let bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

let campgrounds = [
{name: "Dawsons creek", image: "https://cdn.pixabay.com/photo/2018/08/12/08/04/dog-3600325__340.jpg"},
{name: "Saviours", image: "https://cdn.pixabay.com/photo/2018/05/10/15/40/woman-3387820__340.jpg"},
{name: "hilltop", image: "https://cdn.pixabay.com/photo/2018/02/20/11/49/bird-3167441__340.jpg"},

]

app.get("/campgrounds", function(req, res) {
    
        res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
res.render("new");
});


app.post("/campgrounds", function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let newCampgrounds={name: name, image: image}
    campgrounds.push(newCampgrounds)
    res.redirect("/campgrounds");
});


app.get("/list", function(req, res){
    res.render("list");
});

app.listen(process.env.PORT, process.env.IP, function () {
    
});
