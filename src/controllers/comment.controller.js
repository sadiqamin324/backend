import mongoose from "mongoose";
import Comment from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Get all comments for a video
const getVideoComments = asyncHandler(async (req, res, next) => {
    const { videoId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    if (!mongoose.Types.ObjectId.isValid(videoId)) {
        return next(new ApiError(400, 'Invalid video ID'));
    }

    const comments = await Comment.find({ post: videoId })
        .populate('author')
        .skip((page - 1) * limit)
        .limit(parseInt(limit));

    res.status(200).json(new ApiResponse(200, comments, 'Comments retrieved successfully'));
});

// Add a comment to a video
const addComment = asyncHandler(async (req, res, next) => {
    const { text, author, post } = req.body;

    if (!text || !author || !post) {
        return next(new ApiError(400, 'All fields are required'));
    }

    const comment = new Comment({ text, author, post });
    await comment.save();

    res.status(201).json(new ApiResponse(201, comment, 'Comment added successfully'));
});

// Update a comment
const updateComment = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;

    if (!text) {
        return next(new ApiError(400, 'Text field is required'));
    }

    const comment = await Comment.findByIdAndUpdate(id, { text }, { new: true });

    if (!comment) {
        return next(new ApiError(404, 'Comment not found'));
    }

    res.status(200).json(new ApiResponse(200, comment, 'Comment updated successfully'));
});

// Delete a comment
const deleteComment = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const comment = await Comment.findByIdAndDelete(id);

    if (!comment) {
        return next(new ApiError(404, 'Comment not found'));
    }

    res.status(200).json(new ApiResponse(200, null, 'Comment deleted successfully'));
});

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
};