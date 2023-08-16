const ProductModel = require("../Model/ProductModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var fs = require("fs");

// this is the getServices for get request
module.exports.getProduct = async (req, res) => {
  const _data = await ProductModel.find({});
  if (_data) {
    return res.send({ code: 200, message: "success", data: _data });
  } else {
    return res.send({
      code: 500,
      message: "get Data from Backend Server Error",
    });
  }
};

//2.1.1 this is the addServices for save request
module.exports.addProduct = async (req, res) => {
  console.log("addproduct-20", req.body, 20);
  console.log("addproduct-21", req.files, 21);

  try {
    console.log("req.headers", req.headers);
    if (!req.headers.authorization) {
      return res.send({
        code: 403,
        message: "add Data Not found Data for matching of credential data",
      });
    }

    const userDetail = await jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    console.log("token getting", userDetail, 44);

    if (userDetail.iat - new Date().getTime() > 3.6e6) {
      return res.send({ code: 403, message: "Session has been expired" });
    }

    const trainFields = req.body.trainFields;
    const trainHead = req.body.trainHead;
    const trainLang = req.body.trainLang;
    const trainer = req.body.trainer;
    const trainOpin = req.body.trainOpin;
    const trainDesc = req.body.trainDesc;
    const trainFeedback = req.body.trainFeedback;
    const trainAbout = req.body.trainAbout;
    const trainStage = req.body.trainStage;
    const trainRating = req.body.trainRating;
    const trainCert = req.body.trainCert;

    // if (Array.isArray(req.files.trainThumb && req.files.trainThumb.length > 0)) {
    const trainThumb = req.files.trainThumb[0].path;

    //it'll define of properties's value
    const trainAllVideo = [];
    // let countIndex = 1;
    for (let valueOfVideo of req.files.trainAllVideo) {
      //trainAllVideo[countIndex] = valueOfVideo.filename;
      trainAllVideo.push(valueOfVideo.filename);
      // countIndex++;
    }

    const trainMrp = req.body.trainMrp;
    const trainSrp = req.body.trainSrp;
    const trainPurpose = req.body.trainPurpose;

    const trainIntroVid = req.files.trainIntroVid[0].path;

    console.log("trainIntroVid", req.files.trainIntroVid[0]);
    console.log("trainIntroVid", req.files.trainIntroVid[0].path);

    if (
      !trainFields ||
      !trainHead ||
      !trainLang ||
      !trainer ||
      !trainOpin ||
      !trainDesc ||
      !trainFeedback ||
      !trainAbout ||
      !trainStage ||
      !trainRating ||
      !trainCert ||
      !trainThumb ||
      !trainAllVideo ||
      !trainMrp ||
      !trainSrp ||
      !trainPurpose ||
      !trainIntroVid
    ) {
      return res.send({
        code: 400,
        message: "data getting error! Bad Request",
      });
    }

    const newProduct = new ProductModel({
      trainFields: trainFields,
      trainHead: trainHead,
      trainLang: trainLang,
      trainer: trainer,
      trainOpin: trainOpin,
      trainDesc: trainDesc,
      trainFeedback: trainFeedback,
      trainAbout: trainAbout,
      trainStage: trainStage,
      trainRating: trainRating,
      trainCert: trainCert,
      trainThumb: trainThumb,
      trainAllVideo: trainAllVideo,
      trainMrp: trainMrp,
      trainSrp: trainSrp,
      trainPurpose: trainPurpose,
      trainIntroVid: trainIntroVid,
    });

    console.log("newproduct", newProduct, 105);
    const success = await newProduct.save();
    console.log("success", success);

    if (success) {
      return res.send({ code: 200, message: "success" });
    } else {
      return res.send({ code: 500, message: "add data Backend Server Error" });
    }
  } catch (err) {
    res.send({ code: 500, message: "Internal Server Err." });
  }
};

// UPDATE-PRODUCT AFTER CLICK ON UPDATE BUTTON FOR CHANGE DATA FOR SHOW OUTPUT
// 8.1
module.exports.editProduct = async (req, res) => {
  console.log("req.body", req.body);

  const { _id } = req.params;
  console.log("_id-params", _id);

  const productData = await ProductModel.findById(_id);
  console.log("productData", productData);

  if (!productData) {
    res.send({
      code: 404,
      message: "No record exist in the server",
    });
  }

  // trainThumb
  let thumbData = "";
  if (productData.trainThumb) {
    fs.unlink("." + productData.trainThumb, (err) => {
      if (err) {
        console.log(err);
      }
    });
    thumbData = "";
  }

  if (Array.isArray(req.files.trainThumb) && req.files.trainThumb.length > 0) {
    thumbData = "" + req.files.trainThumb[0].path;
  }

  // trainIntroVid
  let introVideoData = "";
  if (productData.trainIntroVid) {
    fs.unlink("." + productData.trainIntroVid, (err) => {
      if (err) {
        console.log(err);
      }
    });
    introVideoData = "";
  }

  if (
    Array.isArray(req.files.trainIntroVid) &&
    req.files.trainIntroVid.length > 0
  ) {
    introVideoData = "" + req.files.trainIntroVid[0].path;
  }

  let trainingsAllVideo = [];

  if (ProductModel.trainAllVideo > 0) {
    for (let iterator of ProductModel.trainAllVideo) {
      fs.unlink("." + iterator, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
    trainingsAllVideo = [];
  }

  if (
    Array.isArray(req.files.trainAllVideo) &&
    req.files.trainAllVideo.length > 0
  ) {
    for (let iterator of req.files.trainAllVideo) {
      trainingsAllVideo.push("/" + iterator.path);
    }
  }

  console.log("req.files.trainThumb;", req.files);
  console.log("req.body.trainThumb;", req.body.trainThumb);

  let newData = {};

  if (req.body.trainHead) {
    newData["trainHead"] = req.body.trainHead;
  } else {
    return alert("data not found");
  }

  if (req.body.trainLang) {
    newData["trainLang"] = req.body.trainLang;
  }
  if (req.body.trainer) {
    newData["trainer"] = req.body.trainer;
  }
  if (req.body.trainOpin) {
    newData["trainOpin"] = req.body.trainOpin;
  }
  if (req.body.trainDesc) {
    newData["trainDesc"] = req.body.trainDesc;
  }
  if (req.body.trainFeedback) {
    newData["trainFeedback"] = req.body.trainFeedback;
  }
  if (req.body.trainAbout) {
    newData["trainAbout"] = req.body.trainAbout;
  }
  if (req.body.trainStage) {
    newData["trainStage"] = req.body.trainStage;
  }
  if (req.body.trainRating) {
    newData["trainRating"] = req.body.trainRating;
  }
  if (req.body.trainCert) {
    newData["trainCert"] = req.body.trainCert;
  }

  if (req.body.trainMrp) {
    newData["trainMrp"] = req.body.trainMrp;
  }
  if (req.body.trainSrp) {
    newData["trainSrp"] = req.body.trainSrp;
  }
  if (req.body.trainPurpose) {
    newData["trainPurpose"] = req.body.trainPurpose;
  }

  let doc = await ProductModel.findByIdAndUpdate(
    _id,
    newData,
    {
      trainThumb: thumbData,
      trainIntroVid: introVideoData,
      trainAllVideo: trainingsAllVideo,
    },
    {
      new: true,
    }
  );

  // console.log(doc, 145);
  if (doc) {
    res.send({ code: 200, message: "data updated success", data: doc });
  } else {
    res.send({
      code: 500,
      message: "Updated data not found from the server",
    });
  }
};

// GET-EDIT_PRODUCT_ById FOR UPDATE
module.exports.getEdtProductById = async (req, res) => {
  let data = await ProductModel.findById(req.params.id);

  if (data) {
    res.send({ code: 200, message: "fetch data by id success", data: data });
  } else {
    res.send({
      code: 500,
      message: "fetching data not found from the server error",
    });
  }
};

// DELETE SELECTED PRODUCT...
module.exports.deleteProducts = async (req, res) => {
  const ids = req.body;
  console.log("");
  const response = await ProductModel.deleteMany({ _id: { $in: ids } });

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

module.exports.getSingleTrainings = async (req, res) => {
  const _singleTrainings = await ProductModel.findById(req.params.id);
  console.log("_singleTrainings", _singleTrainings);

  if (_singleTrainings) {
    return res.send({
      code: 200,
      message: "single Trainings data get success",
      data: _singleTrainings,
    });
  } else {
    return res.send({
      code: 500,
      message: "get single Trainings Server Error",
    });
  }
};
