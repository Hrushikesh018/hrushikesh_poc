// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import { app } from "./app.js";

import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})


connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Sever is running at port:${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("MONGODB connection failed !!!",err)
})













/*
import express from "express";

const app =express()
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR",error)
            throw err
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening ${process.env.PORT}`)
        })
    }catch(e){
        console.error("ERROR ,",e)
        throw err
    }
})()

*/


