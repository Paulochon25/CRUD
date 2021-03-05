const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({
    firstName: String,
    lastName: String,
    userName:  String,
    mail: String,
    phone_number: String,
    img: String,
    role: String
}, {timestamps: true});


module.exports = mongoose.model('User', UserSchema);