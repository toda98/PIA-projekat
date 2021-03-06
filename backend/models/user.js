const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    imagePath: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthdate: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    privilege: { type: String, required: true },
    allowed: { type: String, required: true },
    active: { type: String, required: true },
    logDate: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
