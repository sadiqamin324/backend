import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    const { content } = req.body;

    if (!content) {
        throw new ApiError(400, "content is required");
    }

    const tweet = await Tweet.create({
        content,
        owner: req.user?._id,
    });

    if (!tweet) {
        throw new ApiError(500, "failed to create tweet please try again");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, tweet, "Tweet created successfully"));
});

const getUserTweets = asyncHandler(async (req, res) => {
    const {userId}=req.params
    if (!isValidObjectId(userId)) {
        throw new ApiError(400,"no user found");
        
        
    }
    const tweet=await Tweet.findById(userId)
    if (!userId) {
        throw new ApiError(400,"no tweet found of this user");
    }
    const gettingTweet=await Tweet.aggregate([
        {
            $match:{
                owner:  mongoose.Types.ObjectId(userId)
            }
        
        } ,
        {
            $lookup:{
                from:"users",
                localField:"owner",
                foreignField:"._id",
                as:"user",
                pipeline:[
                    {
                        $lookup:{
                            from:"likes",
                            localField:"._id",
                            foreignField
                        }
                    }
                ]


            }
        }
    ])
    // TODO: get user tweets
})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}