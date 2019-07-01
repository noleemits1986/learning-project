let express = require ("express");
let app = express( );
let request = require("request");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
   res.render("search");
});


app.get("/results", function (req, res){
 let query = req.query.search;
     let comp = "&apikey=thewdb"
       let url = "http://www.omdbapi.com/?s=" + query + comp;
       
    request(url, function (error, response, body){
        
        if(!error & response.statusCode==200) {
            let data =JSON.parse(body)
            res.render("results.ejs", {data: data});
        }
    });
});
















app.listen(process.env.PORT, process.env.IP, function () {
    console.log("movie app");
});
