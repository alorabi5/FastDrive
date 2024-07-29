const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    // require: true
  },
  status: {
    type: Boolean,
    // require: true
  },
  pickupDate: {
    type: Date
  },
  returnDate: {
    type: Date
  },
  imageUrl: {
    type: String,
    // require: true
  },
  imageAlt: {
    type: String,
    // require: true
  },
  description: {
    type: String,
    // require: true
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;