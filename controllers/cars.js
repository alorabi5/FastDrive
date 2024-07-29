// controllers/cars.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Car = require('../models/car.js');


router.get('/', async (req, res) => {
  try{
    // const currentUserCars = await User.findById(req.session.user._id).populate('cars');
    const currentUserCars = await Car.find({});
    res.render('cars/index.ejs', {
      carsEl: currentUserCars
    })
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
  });

  router.get('/new', async (req, res) => {
    res.render('cars/new.ejs', {user: req.session.user})
  });

  router.post('/', async (req, res) => {
    try {
      
      const currentUser = await User.findById(req.session.user._id);
      // req.body.date = new Date(req.body.date)
      const newCar = await Car.create(req.body);
      currentUser.cars.push(newCar);

      await currentUser.save()
      res.redirect(`/cars`)
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  });

  router.get('/:carId', async (req, res) => {
    try {
      const car = await Car.findById(req.params.carId);
      // const car = currentUser.populate("cars").id(req.params.carId)
      res.render('cars/show.ejs', {
        car
      })
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  })

  router.delete('/:carId', async (req, res) => {
    try {
      // const currentUser = await User.findById(req.session.user._id)
      // currentUser.cars.id(req.params.carId).deleteOne()
      const car = await Car.findById(req.params.carId).deleteOne();
      console.log('correct');
      res.redirect(`/cars`)
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  })

  router.get('/:carId/edit', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id)
      const car = await Car.findById(req.params.carId)
      res.render('cars/edit.ejs', {
        car,
      })
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  })

  router.put('/:carId', async (req, res) => {
    try {
      // const currentUser = await User.findById(req.session.user._id);
      // const car = currentUser.cars.id(req.params.carId);
      const car = await Car.findById(req.params.carId);
      
      car.set(req.body);
      await car.save();
      
      res.redirect(`/cars/${req.params.carId}`);
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });


module.exports = router;