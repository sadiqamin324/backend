//require('dotenv').config({path:'./env'})//
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


/* import mongoose from "mongoose";
 import { DB_NAME } from "./constants";
 (async()=>
{
    try {
        await mongoose.connect('${process.env.MONGODB_URI/}/${DB_NAME}')
        
    }catch(error){
        console.error("ERROR")
        app.on("error",(error)=>{
            console.log("ERRR",error);
            throw error
        })
    
    }
    app.listen(process.env.PORT,()=>{
        console.log('app is listening on PORT ${process.env.PORT}')
    })
})()*/
