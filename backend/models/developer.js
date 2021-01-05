const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const devSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    emailtoken: {
        type: String,
        required: true,
        

    },
    Password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})


const DevModel = new mongoose.model("DevModel", devSchema)

module.exports = DevModel; 