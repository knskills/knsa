const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = new Schema({
  trainingType: {
    type: String,
    required: true,
  },
  usersMembers: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  usersValue: {
    type: String,
    required: true,
  },
  usersName: {
    type: String,
    required: true,
  },
  usersMail: {
    type: String,
    required: true,
  },
  usersHeading: {
    type: String,
    required: true,
  },
  usersTotalTrain: {
    type: String,
    required: true,
  },
  usersEdu: {
    type: String,
    required: true,
  },
  usersExpe: {
    type: String,
    required: true,
  },
  usersAward: {
    type: String,
    required: true,
  },
  usersAbout: {
    type: String,
    required: true,
  },
  usersMobi: {
    type: Number,
    required: true,
  },
  trainersId: {
    type: String,
    required: true,
  },
  trainersPass: {
    type: String,
    required: true,
  },
  trainersConPass: {
    type: String,
    required: true,
  },
  trainersTerm: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userData", userModel);
