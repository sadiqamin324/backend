# this is production based project #
import mongoose, { Schema } from "mongoose";
import jwt from"jsonwebtoken"

import bcrypt from "bcrypt"
const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      lowcase: true,
      index: true, // whenever we need to search field index must be true research on it
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary URL means avatar image will come from another cloud service which will be provided by cloudinary in string
      required: true,
    },
    coverimage: {
      type: String, // again third-party source cloudinary solves the syntax error
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    password: {
      type: String, // this is standard; we are using type string, not integer
      required: [true, "password is required"],
    },
  },
  {
    timestamps: true, // Added here as part of the Schema options
  }
);
userSchema.pre("save",async function name(next) {
    if (!this.isModified("password")) return next();
        
    
    this.password=await bcrypt.hash(this.password,10)
    next()
    
})//we are encrypting our data before saving
userSchema.methods.isPasswordCorrect= async function (password) { return await bcrypt.compare(password,this.password)
  
}
userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          email: this.email,
          username: this.username,
          fullName: this.fullName
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
}
userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
      {
          _id: this._id,
          
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
          expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
  )//ismain info kam hoti hay
}

export default mongoose.model("User", userSchema);

