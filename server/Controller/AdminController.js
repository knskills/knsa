require("dotenv").config();
var jwt = require("jsonwebtoken");

const AdminModel = require("../Model/AdminModel");
// const RolesModel = require("../models/RolesModel");

// this is the getAdmins for get request
module.exports.getAdmin = async (req, res) => {
  const _data = await AdminModel.find({});
  console.log("_data", _data);

  if (_data) {
    return res.send({ code: 200, message: "success", data: _data });
  } else {
    return res.send({ code: 500, message: "Backend Server Error" });
  }
};

module.exports.addAdmin = async (req, res) => {
  const type = req.body.type;
  const adminName = req.body.adminName;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const userid = req.body.userid;
  const password = req.body.password;
  const conpassword = req.body.conpassword;
  const date = req.body.date;

  const _adminresult = await AdminModel.create({
    type,
    adminName,
    mobile,
    email,
    userid,
    password,
    conpassword,
    date,
  });

  console.log("_adminresult", _adminresult);
  if (_adminresult) {
    return res.send({ code: 200, message: "success", data: _adminresult });
  } else {
    return res.send({ code: 500, message: "Backend Server Error" });
  }
};

module.exports.loginAdmin = async (req, res) => {
  const { userid, password } = req.body;
  console.log("loginAdmin", req.body);

  const userExists = await AdminModel.findOne({ userid: userid });
  console.log("userExists", userExists);
  if (userExists) {
    if (userExists.password !== password) {
      return res.send({
        code: 400,
        message: "Username or Password does not exist",
      });
    }

    const _token = jwt.sign(
      {
        ...userExists,
        type: userExists.type,
        adminName: userExists.adminName,
        mobile: userExists.mobile,
        email: userExists.email,
        userid: userExists.userid,
        password: userExists.password,
        conpassword: userExists.conpassword,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("_token", _token);
    return res.send({
      code: 200,
      message: "Backend Server LoginAdmin found success",
      token: _token,
      type: userExists.type,
      adminName: userExists.adminName,
    });
  } else {
    return res.send({
      code: 500,
      message: "Backend Server LoginAdmin found Error",
    });
  }
};

module.exports.addToCart = async (req, res) => {
  console.log(req.body, 66);
  const isUpdate = await AdminModel.updateOne(
    { _id: req.body.userId },
    { $addToSet: { cart: req.body } }
  );

  console.log("isUpdate", isUpdate, 72);

  if (isUpdate) {
    return res.send({
      code: 200,
      message: "Add to cart success from backend",
    });
  } else {
    return res.send({ code: 500, message: "Backend cart getting error" });
  }
};

module.exports.getToCart = async (req, res) => {
  console.log("body data is", req.body, 85);
  const userId = req.body.userId;
  const getCartData = await AdminModel.findOne({ _id: userId }).populate(
    "cart"
  );

  console.log("getCartData is", getCartData, 91);

  if (getCartData) {
    return res.send({
      code: 200,
      message: "getting Add to cart success from backend",
      data: getCartData,
    });
  } else {
    return res.send({
      code: 500,
      message: "getting cart data error from server",
    });
  }
};
