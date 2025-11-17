const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String
    },
    avatar: {
        type: String,
        default: '/Assets/Images/default-avatar.png'
    },

})

const User = mongoose.model('User', userSchema)

module.exports = User
