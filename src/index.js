//require('dotenv').config({path:'./env'})//
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 800),()=>{
        console.log(`server is running at port"${process.env.PORT}`);
    }
})
.catch((err)=> {
    console.log('error'.err);
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
