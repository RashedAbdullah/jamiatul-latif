import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  book: {
    type: String,
    required: true,
  },
  classId: {
    type: mongoose.Schema.ObjectId,
    ref: "classes",
  },
});

const bookModel = mongoose.models.Book || mongoose.model("Book", bookSchema);

export { bookModel };
