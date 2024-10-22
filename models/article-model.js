import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
      maxlength: [150, "Title cannot exceed 150 characters"],
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
    description: {
      type: String,
      required: [true, "Description content is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    coverImage: {
      type: String,
      default: null,
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const articleModel =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export { articleModel };
