const mongoose = require('mongoose');

const { Schema } = mongoose;

const dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    // required: true,
    min: 0.99
  },
  ingredients: [{
    type: String,
    // required: true,
    // trim: true
  }],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    // required: true
  },
  prepper: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
