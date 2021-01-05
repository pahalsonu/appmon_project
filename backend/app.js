const express = require('express');
const app = express();
const fs = require("fs");
const { dirname } = require('path');
const path = require('path')

//model schema
const AdminModel = require("./models/admin");
const DevModel = require("./models/developer")
const OrganizationModel = require("./models/organizarion");

const port = process.env.port || 2021;
// connect database
require("./mondb");

const loggerFilePath = path.join(__dirname, "./logger")
 
app.get('/', (req, res)=>{
    const date = new Date()
    const ips = req.ips + " " + date.toLocaleString()+
    console.log(ips)
    const logger = async () =>{
        try {
            fs.appendFile(loggerFilePath+"/"+"logger.txt",ips, (err)=>{
                if(err){
                    console.log(err)
                }
            } )
        } catch (error) {
            
        }
    }
    logger();
    res.send('hello' )
})

app.listen(port, ()=>{
    console.log(`Server is started at ${port}`);

})