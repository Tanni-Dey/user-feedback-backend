const mongoose = require("mongoose");

const FeatureReqSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
    maxLength: [30, "title can not be more than 30 characters"],
  },
  description: {
    type: String,
    required: [true, "must provide description"],
    trim: true,
  },
  logo: {
    type: String,
    default:
      "https://cdn4.iconfinder.com/data/icons/seo-accessibility-usability-1-2/256/User_Testing-512.png",
    trim: true,
  },
  status: {
    type: String,
    enum: ["active", "in-active", "acrived"],
    default: "in-active",
  },
  sortingOrder: {
    type: String,
    enum: ["newest", "oldest", "vote", "comment", ""],
    default: "newest",
  },
  comments: [
    {
      user: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],
  vote: [{ type: String }],
});

module.exports = mongoose.model("FeatureReq", FeatureReqSchema);
