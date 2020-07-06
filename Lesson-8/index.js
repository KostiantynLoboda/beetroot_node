const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
        name: String,
        age: Number,
        phones: [],
    },
    { versionKey: false,});

mongoose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model("User", userScheme);

//Create
const user = new User({
        name: "John",
        age: 33,
        phones: ['+380500000000', '+380661111111'],
});

user.save()
    .then(function(document){
            console.log(`Obj was saved`, document);
            mongoose.disconnect();
    })
    .catch(function (error){
            console.log(error);
            mongoose.disconnect();
    });

//Find Users/(User)
// User.find({}, function(error, docs){
/*User.find({name: "John"}, function(error, docs){
        mongoose.disconnect();
        if(error) return console.log(error);
        console.log(docs);
});*/

//Remove
/*User.deleteOne({age:33}, function(error, result){
        mongoose.disconnect();

        if(error) return console.log(error);

        console.log(result);
});*/

// Update
/*User.updateOne({name: "John"}, {name: "John White"}, function(error, result){
        mongoose.disconnect();
        if(error) return console.log(error);
        console.log(result);
});*/
