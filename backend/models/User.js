const mongoose = require('mongoose');
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type:String,
        unique:true,  //email should be unique for every user.
        required:[true,'Please provide your email']
    },
    password: {
        type: String,
        required: [true,"Please provide a Password"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports =mongoose.model('user',UserSchema);
