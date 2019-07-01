let express = require("express");
let app = express();

// this will show "/ with hi there"
app.get("/", function (req, res) {
    res.send("hello");
});

// this will show "/ with hi bye"

app.get("/bye", function ( req, res) {
   res.send("bye fools");
 
});

// this will show "/ with hi MEOW"

app.get("/Meow", function ( req, res) {
   res.send("MEOW");
 
});
//wildcard
app.get("/*", function(req, res) {
    res.send("twinkle little star");
    console.log("hey yo");
})

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("hello");
});