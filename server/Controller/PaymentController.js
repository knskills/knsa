// P-3 i'll import of this razorpay for order creation, const Razorpay = require('razorpay');
const Razorpay = require("razorpay");
const YOUR_KEY_ID = "rzp_test_WIPIFGDKPGtXkW";
const YOUR_SECRET = "wZuFyYwM1VUe04125niPxwci";
module.exports.orders = (req, res) => {
  // P-4 copy the all code and paste here
  // here key_id and key_secret bring from download area
  // Order API
  //     API Sample Code
  // Use the code given below in the server-side to generate orders:
  let instance = new Razorpay({
    key_id: YOUR_KEY_ID,
    key_secret: YOUR_SECRET,
  });

  //P-4.1 here amount are bring from req body
  var options = {
    amount: req.body.amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  instance.orders.create(options, function (err, order) {
    // P-4.2 if i get error then
    if (err) {
      res.send({ code: 500, message: "Server" });
    } else {
      // P-4.2 if not get error and send the data:order (means ir payment in multiple then it'll take one and refund apart from)
      return res.send({ code: 200, message: "Order Created", data: order });
    }

    console.log(order);
  });
  res.send({ order });
};

// Now i'll go on "https://razorpay.com/docs/payments/server-integration/nodejs/payment-gateway/build-integration/" and create a payment button in frontend  for click on Pay fo payment then..
// and firstly i'll import in frontend in index.html page public folder

const crypto = require("crypto");
module.exports.verify = (req, res) => {
  let body =
    req.body.response.razorpay_order_id + "|" + req.body.response.payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", key_secret)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === req.body.response.razorpay_signature) {
    res.send({ code: 200, message: "Sign Valid" });
  } else {
    res.send({ code: 500, message: "Sign InValid" });
  }

  // now i'll go for import of api router in userCart handleOpenRezor variable
};
