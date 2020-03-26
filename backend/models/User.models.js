const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    timestamp : {
        type : Date,
        default: Date.now
    }
});


module.exports = model('users', UserSchema);