require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db connected to the mongoose successfully"))
  .catch((err) => console.log("Db connection error", err));

const express = require("express");

const multer = require("multer");
const path = require("path");

const app = express();
// Step-1 When i'll import of this code in render.com than i'll give a port is this and go below Step-2
const PORT = process.env.PORT_HOST || 8080;
// const PORT = process.env.PORT_HOST || 8000;

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + "_" + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("images");

// SERVICES CONTROLLER API CALL
// 2.2
const serviceController = require("./controller/servicesController");
const auth = require("./middleware/auth");

// A-4 here will firstly run "auth" and than will run next getServices.js file
app.get("/api/services", auth.checkToken, serviceController.getServices);

app.post(
  "/api/services",
  auth.checkToken,
  upload,
  serviceController.addServices
);

// "auth.checkToken," here i'll mention in each place where i want required it. It's means if user have token than it'll work otherwise it'll not work.
//C1 CRUD OPERATION
// OUTPUT AFTER ADD PRODUCT for output
app.post("/api/edit-product", auth.checkToken, serviceController.editProduct);

// THIS SECTION FOR EDIT FILE INTERFACE AFTER CLICK ON EDIT BUTTON
app.get(
  "/api/get-products/:id",
  auth.checkToken,
  serviceController.getProductById
);

// THIS IS THE SECTION FOR EDIT
app.post("/delete-products", auth.checkToken, serviceController.deleteProducts);

// ADMIN CONTROLLER API CALL
const adminController = require("./controller/adminController");

// This api for get data for frontend
app.get("/admin/admins", adminController.getAdmins);

// This api for add data for frontend to backend
app.post("/admin/admins", adminController.addAdmins);

app.post("/admin/loginadmin", adminController.loginAdmin);

// Add to Cart
app.post("/cart/add-to-cart", adminController.addToCart);
app.post("/cart/get-to-cart", adminController.getToCart);

// Slider
app.get("/api/slider", serviceController.getSlider);
app.get("/api/vehicleslider", serviceController.vehicleSlider);

// Step-2 and this script code is mention in server >> package.json file
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "start": "node index.js",
//   "server": "nodemon index.js",
//   "client": "npm start --prefix ./client",
//   "dev": "concurrently \"npm start\" \"npm run client\""
// },

// import of paymentConroller file here
import paymentController from "./controller/paymentController";
// P-2 for create orders and now i'll make the paymentConroller file in controller folder with point P3,
// and now i'll install of "npm i razorpay" from taking code is "https://razorpay.com/docs/payments/server-integration/nodejs/install/" and follow the steps
// "Note :- " im creat a order id using order api so that no done a multiple payments by users so.
// after install packeges then now go on paymentController
app.post("/orders", paymentController.orders);
app.post("/verify", paymentController.verify);
// Step - 3 and i'll mention of this below two code here. Thats it.
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello Er. Avinash!");
});

//R-1 Admin role function for delete and active or block.
// Firstly i'll import of create controller file than..
const rolesController = require("./controller/rolesController");
//R-2 now i'll create of "rolesController.js" file and define that then.., and go on rolesController with point R-3
app.post("/add-role", auth.checkToken, rolesController.addRole);
app.post("/delete-role", auth.checkToken, rolesController.deleteRole);

app.listen(PORT, () => {
  console.log(`AARSHPROJECT is running on PORT at http://localhost:${PORT}`);
});
