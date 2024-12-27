import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, //cloudinary url again it gives you the info of file whenever the file is uploaded it gives you the duration of the video as well
            required: true
        },
        views: {
            type: Number,
            default: 0//otherwise random number will occur 
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"//kahan se lain user ka nam it is arefrence
        }

    }, 
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)//now we can write aggreagte models 

export const Video = mongoose.model("Video", videoSchema)