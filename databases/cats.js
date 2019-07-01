let mongoose =require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

let catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

let Cat = mongoose.model("cat", catSchema);

// let george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "grouchy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("something weng wrong")
//     } else {
//         console.log("we just saved a cat to the db");
//         console.log(cat);
//     }
// });

Cat.create({
 name: "pepe",
 age: 14,
 temperament: "happy feet"
    
}, function(err, cats){
    if(err){
        console.log("something's wrong foo");
    }else{
        console.log("success");
        console.log(cats);
    }
});


Cat.find({}, function(err, cats){
    if(err){
        console.log("there is an error fool");
    }else {
        console.log("cats...");
        console.log(cats);
    }
});