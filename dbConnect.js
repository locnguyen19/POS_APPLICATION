const mongoose = require('mongoose')
const dbConnect = require("./dbConnect");


const URL = 'mongodb+srv://mathias:mathias@pos.ytmdizf.mongodb.net/pos-application'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})