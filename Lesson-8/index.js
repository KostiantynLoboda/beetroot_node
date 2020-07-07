const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/users';

const userScheme = new Schema({
        name: String,
        age: Number,
        phones: [],
    },
    { versionKey: false,});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', userScheme);

function сreateUser() {
    User.create({
        name: 'John',
        age: 35,
        phones: ['+380500000000', '+380661111111'],
    }, (error, document) => {
        mongoose.disconnect();
        if (error) {
            return console.log(error);
        }
        console.log(`Obj was saved`, document);
    });
}
async function findUser() {
    // User.find({}, function(error, docs){
    await User.find({name: "John"}, (error, docs) => {
            mongoose.disconnect();
            if(error) return console.log(error);
            console.log(docs);
    });
}
async function removeUser() {
    await User.deleteOne({age:33}, (error, result) => {
            mongoose.disconnect();
            if(error) return console.log(error);
            console.log(result);
    });
}
async function updateUser() {
    await User.updateOne({name: "John"}, {name: "John White"}, function(error, result){
        mongoose.disconnect();
        if(error) return console.log(error);
        console.log(result);
    });
}

сreateUser();
// findUser();
// removeUser();
// updateUser();