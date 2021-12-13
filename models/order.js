const { Schema, model } = require("mongoose");
const { cartItemSchema } = require("./cartItem");
const { profileSchema } = require("./profile");
cartItemSchema;
const orderSchema = Schema({
  cartItems: [cartItemSchema],
  transactionId: {
    type: String,
    unique: true,
  },
  profile: [profileSchema],
  status: {
    type: String,
    enum: ["Pending", "Complete", "Canceled"],
    default: "Pending",
  },
  sessionKey: String,
});

const Order = model("Order", orderSchema);

module.exports = { Order };
