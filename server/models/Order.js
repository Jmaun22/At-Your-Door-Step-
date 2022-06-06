const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  dishes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Dish'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
