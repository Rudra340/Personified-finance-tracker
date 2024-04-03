const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    email: {
        required: [true,"You need to enter email"],
        type:String,
    },
    firstname: {
        required: [true,"You need to enter Firstname"],
        type:String,
    },
    lastname: {
        required: [true,"You need to enter Lastname"],
        type:String,
    },
    password: {
        required: [true,"You need to enter Password"],
        type:String,
    },
    isAdmin: {
        type:Boolean,
        default:false,
    },
},{
    timestamp: true,
});


//  compile schema into module
const User=mongoose.model("User", userSchema);

module.exports=User;

// sample user
// "firstname": "rudra",
//     "lastname": "abc",
//     "password": "12345",
//     "isAdmin": false,
//     "_id": "660cee219ae5cce9f9d01cb8",
//     "__v": 0