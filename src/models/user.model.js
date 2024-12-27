import mongoose, { Schema } from "mongoose";

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

export default mongoose.model("User", userSchema);

