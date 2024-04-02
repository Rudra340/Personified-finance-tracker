const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
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