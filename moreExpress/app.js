let express = require("express");
let app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("home");
})




app.get("/fallinlovewith/:thing", function(req, res){
    let thing = req.params.thing;
    res.render("love", {thingVar: thing});
});


app.get("/posts", function(req, res) {
    var posts = [
        {title: "post 1", author: "sussy"},
            {title: "My pet", author: "Tu"},
                  {title: "My cow ", author: "Yo"},
        ];
        res.render("posts", {posts: posts});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening");
})