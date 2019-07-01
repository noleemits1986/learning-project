let express = require("express");
let app = express();
app.set("view engine", "ejs");
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


let friends=["Tony", "Miranda", "francisco", "chico"];
app.get("/friends", function (req, res) {
    
    res.render("friends",  {friends: friends});
});

app.post("/addfriend", function (req, res){
    let newFriend=req.body.newfriend;
    friends.push(newFriend)
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Yolo");
});