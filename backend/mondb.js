const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/appmon",
    {
        useNewUrlParser :true,
        useUnifiedTopology:true,
        useCreateIndex:true
    });
    console.log('Mongo Db is Succefully Connected  💪  💪 ')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB()