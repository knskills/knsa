const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminModel = new Schema({
  type: {
    type: String,
    required: true,
  },
  adminName: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  conpassword: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  cart: [{ type: Schema.Types.ObjectId, ref: "productData" }],
});

module.exports = mongoose.model("adminData", adminModel);
