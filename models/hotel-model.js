import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String,
      required: true,
    },
    gallery: [
      {
        type: String,
      },
    ],
    price: {
      type: Number, // Corrected this line
    },
    facilities: [
      {
        img: String,
        name: String,
      },
    ],
    locations: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models?.hotel || mongoose.model("hotel", hotelSchema);
