const mongoose = require('mongoose');

// const carSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     require: true
//   },
//   price: {
//     type: Number,
//     require: true
//   },
//   status: {
//     type: Boolean,
//     require: true
//   },
//   pickupDate: {
//     type: Date
//   },
//   returnDate: {
//     type: Date
//   },
//   imageUrl: {
//     type: String,
//     require: true
//   },
//   imageAlt: {
//     type: String,
//     require: true
//   },
//   description: {
//     type: String,
//     require: true
//   },
// });

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
  cars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  }]
});

// const adminSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   cars: [carSchema],
//   users: [userSchema]
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
