const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
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
    password: {
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


const AdminModel = new mongoose.model("AdminModel", adminSchema)

module.exports =AdminModel; 