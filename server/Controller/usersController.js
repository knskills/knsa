require("dotenv").config();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var fs = require("fs");

const UsersModel = require("../Model/UsersModel");
// const RolesModel = require("../models/RolesModel");

// this is the getAdmins for get request
module.exports.getUsers = async (req, res) => {
  const _data = await UsersModel.find({});
  console.log("_data", _data);

  if (_data) {
    return res.send({
      code: 200,
      message: "users data get success",
      data: _data,
    });
  } else {
    return res.send({ code: 500, message: "get Users Server Error" });
  }
};

module.exports.createUsers = async (req, res) => {
  try {
    console.log("createusers-body", req.body);
    console.log("createusers-file", req.files);

    let isPresent = await UsersModel.findOne({
      usersMail: req.body.usersMail.toLowerCase(),
    });
    if (isPresent !== null) {
      return res.status(400).json({
        success: false,
        message: "Customer already exist in the data base!",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedtrainersPass = await bcrypt.hash(req.body.trainersPass, salt);

      const trainingType = req.body.trainingType || null;
      const usersMembers = req.body.usersMembers;
      const avatar = req.files.avatar[0].path;
      const usersValue = req.body.usersValue;
      const usersName = req.body.usersName;
      const usersMail = req.body.usersMail;
      const usersHeading = req.body.usersHeading || null;
      const usersTotalTrain = req.body.usersTotalTrain || null;
      const usersEdu = req.body.usersEdu || null;
      const usersExpe = req.body.usersExpe || null;
      const usersAward = req.body.usersAward || null;
      const usersAbout = req.body.usersAbout || null;
      const usersMobi = req.body.usersMobi;
      const trainersId = req.body.trainersId;
      const trainersPass = hashedtrainersPass;
      const trainersConPass = hashedtrainersPass;
      const trainersTerm = req.body.trainersTerm;
      const date = req.body.date;

      const _userResult = await UsersModel.create({
        trainingType,
        usersMembers,
        usersValue,
        usersName,
        usersMail,
        usersHeading,
        usersTotalTrain,
        usersEdu,
        usersExpe,
        usersAward,
        usersAbout,
        usersMobi,
        trainersId,
        trainersPass,
        trainersConPass,
        trainersTerm,
        avatar,
        date,
      });

      console.log("_userResult", _userResult);
      if (_userResult) {
        return res.send({
          code: 200,
          message: "Successfully created the customer!",
          data: _userResult,
        });
      } else {
        return res.send({ code: 500, message: "Backend add Server Error" });
      }
    }
  } catch (error) {
    return res.send({ code: 500, message: "Backend add Server Error" });
  }
};

module.exports.loginUsers = async (req, res) => {
  const { trainersId, trainersPass } = req.body;
  console.log("loginUsers", req.body);

  const userExists = await UsersModel.findOne({ trainersId: trainersId });
  console.log("userExists", userExists);
  if (userExists) {
    if (!userExists) {
      return res.send({
        code: 400,
        message: "Please try to login with correct credentials",
      });
    }

    const passwordCompare = await bcrypt.compare(
      trainersPass,
      userExists.trainersPass
    );

    if (!passwordCompare) {
      return res.send({
        code: 400,
        message: "Username or trainersPass does not exist",
      });
    }

    const _token = jwt.sign(
      {
        ...userExists,
        trainingType: userExists.trainingType,
        usersName: userExists.usersName,
        usersMail: userExists.usersMail,
        trainersId: userExists.trainersId,
        trainersPass: userExists.trainersPass,
        trainersConPass: userExists.trainersConPass,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("_token", _token);
    return res.send({
      code: 200,
      message: "Login Admin verify success",
      token: _token,
      trainingType: userExists.trainingType,
      usersName: userExists.usersName,
      usersValue: userExists.usersValue,
    });
  } else {
    return res.send({
      code: 500,
      message: "Backend Server LoginAdmin found Error",
    });
  }
};

module.exports.updateUsers = async (req, res) => {
  console.log("req.body", req.body);

  const { _id } = req.params;
  console.log("_id-params", _id);

  const editUsersData = await UsersModel.findById(_id);
  console.log("productData", editUsersData);

  if (!editUsersData) {
    res.send({
      code: 404,
      message: "No record exist in the server",
    });
  }

  // avatar
  let avatarData = "";
  if (editUsersData.avatar) {
    fs.unlink("." + editUsersData.avatar, (err) => {
      if (err) {
        console.log(err);
      }
    });
    avatarData = "";
  }

  if (Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
    avatarData = "" + req.files.avatar[0].path;
  }

  console.log("req.files.avatar;", req.files);
  console.log("req.body.avatar;", req.body.avatar);

  let newData = {};
  if (req.body.trainingType) {
    newData["trainingType"] = req.body.trainingType;
  }
  if (req.body.usersMembers) {
    newData["usersMembers"] = req.body.usersMembers;
  }
  if (req.body.usersName) {
    newData["usersName"] = req.body.usersName;
  }
  if (req.body.usersMail) {
    newData["usersMail"] = req.body.usersMail;
  }
  if (req.body.usersHeading) {
    newData["usersHeading"] = req.body.usersHeading;
  }
  if (req.body.usersTotalTrain) {
    newData["usersTotalTrain"] = req.body.usersTotalTrain;
  }
  if (req.body.usersEdu) {
    newData["usersEdu"] = req.body.usersEdu;
  }
  if (req.body.usersExpe) {
    newData["usersExpe"] = req.body.usersExpe;
  }
  if (req.body.usersAward) {
    newData["usersAward"] = req.body.usersAward;
  }
  if (req.body.usersAbout) {
    newData["usersAbout"] = req.body.usersAbout;
  }
  if (req.body.usersMobi) {
    newData["usersMobi"] = req.body.usersMobi;
  }
  if (req.body.trainersId) {
    newData["trainersId"] = req.body.trainersId;
  }
  if (req.body.trainersPass) {
    newData["trainersPass"] = req.body.trainersPass;
  }
  if (req.body.trainersConPass) {
    newData["trainersConPass"] = req.body.trainersConPass;
  }
  if (req.body.trainersTerm) {
    newData["trainersTerm"] = req.body.trainersTerm;
  }
  if (req.body.usersValue) {
    newData["usersValue"] = req.body.usersValue;
  }

  let _doc = await ProductModel.findByIdAndUpdate(
    _id,
    newData,
    {
      avatar: avatarData,
    },
    {
      new: true,
    }
  );

  // console.log(doc, 145);
  if (_doc) {
    res.send({ code: 200, message: "Users updated success", data: _doc });
  } else {
    res.send({
      code: 500,
      message: "Updated Users not found from the server",
    });
  }
};

// GET-EDIT_PRODUCT_ById FOR UPDATE
module.exports.getUsersById = async (req, res) => {
  let _data = await UsersModel.findById(req.params.id);

  if (_data) {
    res.send({ code: 200, message: "fetch data by id success", data: _data });
  } else {
    res.send({
      code: 500,
      message: "fetching data not found from the server error",
    });
  }
};

module.exports.deleteUsers = async (req, res) => {
  const ids = req.body;

  const response = await UsersModel.deleteMany({ _id: { $in: ids } });
  console.log("delete-response", response);

  if (response) {
    res.send({
      code: 200,
      message: "server data deleted success",
      data: response,
    });
  } else {
    res.send({
      code: 500,
      message: "server delete getting some error",
    });
  }
};

module.exports.getSingleUsers = async (req, res) => {
  const _singleData = await UsersModel.findById(req.params.id);
  console.log("_singleData", _singleData);

  if (_singleData) {
    return res.send({
      code: 200,
      message: "single users data get success",
      data: _singleData,
    });
  } else {
    return res.send({ code: 500, message: "get single Users Server Error" });
  }
};
