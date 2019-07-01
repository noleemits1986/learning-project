let express =require("express");
let app = express();

app.get("/", function (req, res){
    res.send("Hi there, welcome to the assignment");
});

app.get("/speak/:animal", function (req, res){
    let sounds = { cow: "moo",
                    pig: "oink",
                    cat: "meow"
    }
    let animal = req.params.animal.toLowerCase();
    let sound = sounds[animal];
    
    
    res.send ("the " + animal+" says '"+sound+"'")
    
});


app.get("/repeat/:message/:times", function (req, res){
    let message = req.params.message;
    let times = Number(req.params.times);
    let result= "";
    for (let i = 0; i<times; i++ ) {
     result += message+" ";
    }
res.send(result);
});


app.get("*", function(rea, res){
    res.send("what are you doing with your life?");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("This works fool...I think");
});