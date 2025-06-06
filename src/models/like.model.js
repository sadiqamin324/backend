import mongoose, { Schema } from "mongoose";

const like= new Schema({
    Comment:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    },
    video:
    {
        type:Schema.Types.ObjectId,
        ref:"Video"
    },
    likedby:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    tweet:{
        type:Schema.Types.ObjectId,
        ref:"Tweet"
    }
}
,{
    timestamps:true
}


)
export const Like=mongoose.model("Like",like)