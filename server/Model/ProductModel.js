const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productModel = new Schema({
  trainFields: {
    type: String,
    required: true,
  },
  trainHead: {
    type: String,
    required: true,
  },
  trainLang: {
    type: String,
    required: true,
  },
  trainer: {
    type: String,
    required: true,
  },
  trainOpin: {
    type: String,
    required: true,
  },
  trainDesc: {
    type: String,
    required: true,
  },
  trainFeedback: {
    type: String,
    required: true,
  },
  trainAbout: {
    type: String,
    required: true,
  },
  trainStage: {
    type: String,
    required: true,
  },
  trainRating: {
    type: String,
    required: true,
  },
  trainCert: {
    type: String,
    required: true,
  },
  trainThumb: {
    type: String,
    required: true,
  },
  trainAllVideo: {
    type: Array,
    required: true,
  },
  trainMrp: {
    type: Number,
    required: true,
  },
  trainSrp: {
    type: Number,
    required: true,
  },
  trainPurpose: {
    type: String,
    required: true,
  },
  trainIntroVid: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("productData", productModel);
