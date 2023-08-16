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
app.use(express.urlencoded({ extended: false, limit: "1gb" }));
app.use(express.json());

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
}).fields([
  { name: "trainThumb", maxCount: 1 },
  { name: "trainAllVideo", maxCount: 10 },
  { name: "trainIntroVid", maxCount: 1 },
  { name: "avatar", maxCount: 1 },
]);

//adminController - API
const adminController = require("./Controller/AdminController");
app.get("/api/get-admin", adminController.getAdmin);
app.post("/api/add-admin", adminController.addAdmin);
app.post("/api/login-admin", adminController.loginAdmin);

//usersController - API
const usersController = require("./Controller/usersController");
app.get("/users/get-users", usersController.getUsers);
app.get("/users/getsingle-users/:id", usersController.getSingleUsers);
app.post("/users/add-users", upload, usersController.createUsers);
app.post("/users/login-users", usersController.loginUsers);
app.get("/users/getedit-users/:id", usersController.getUsersById);
app.post("/users/editUpdate-users/:_id", upload, usersController.updateUsers);
app.post("/users/delete-users", usersController.deleteUsers);

// Add to Cart
app.post("/cart/add-to-cart", adminController.addToCart);
app.post("/cart/get-to-cart", adminController.getToCart);

//ProductController - API and Route
const prodcutController = require("./Controller/productController");
app.get("/api/get-products", prodcutController.getProduct);
app.get("/api/getsingle-trainings/:id", prodcutController.getSingleTrainings);
app.post("/api/add-product", upload, prodcutController.addProduct);
app.post("/api/edit-product/:_id", upload, prodcutController.editProduct);
app.get("/api/get-products-edit/:id", prodcutController.getEdtProductById);
app.post("/delete/delete-products", prodcutController.deleteProducts);

// paymentController - Api and Route
const paymentController = require("./Controller/PaymentController");

app.post("/payment_orders/orders", paymentController.orders);
app.post("/payment/verify", paymentController.verify);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello Er. Avinash!");
});

app.listen(PORT, () => {
  console.log(`KN_ACADEMY is running on PORT at http://localhost:${PORT}`);
});
