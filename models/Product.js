const { Schema, model, Types } = require("mongoose");

const Product = Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "A Valid Name Is Required"],
  },
  price: {
    type: Number,
    required: [true, "A Valid Price Is Required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Types.Decimal128,
    validate: {
      validator: (value) => value >= 0 && value <= 5,
      message: "Invalid Rating Range",
    },
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now().toString(),
  },
  company: {
    type: String,
    required: true,
  },
});

module.exports=model("Products",Product)
