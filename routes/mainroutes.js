const express = require('express');
const router = require("express").Router();
const passport = require("passport");
const path = require("path");
const {
  registerAdmin,
  registerBaby,
  registerSitter,
} = require("../controllers/RegController.js");
const ensurelogin= require('connect-ensure-login');
const Admin = require("../models/Admin.js");
const Baby = require('../models/Baby.js');
const Sitter = require('../models/Sitter.js');
const babycheckin = require('../models/Babycheckin.js')
const Procurements = require('../models/Procurements.js');
const Babycheckin = require('../models/Babycheckin.js');

router.get("/index", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, "../views/index"))
});

router.get("/adminReg", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, "../views/adminReg"))
});

router.post("/adminReg", async (req, res, next) => {
  try {
    const admin = new Admin(req.body);
    console.log(admin);
    await Admin.register(admin, req.body.password);
    res.redirect("/index");
  } catch (error) {
    res.status(400).send("cound't register admin");
    console.log(error);
  }
});

router.get("/babycheckin", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, "../views/babycheckin"))
});

router.post("/babycheckin", async (req, res) => {
  if (req.body != null) {
    try {
      const {
        babyName, guardian, phone, periodOfStay, amountPaid, checkin, assignSitter, notes 
      } = req.body;

      // Check if the a baby of the same name is registered
      const babycheckin = await Babycheckin.findOne({ babyName });

      if (!babycheckin) {
        // create a new baby variable
        const newBabycheckin = new Babycheckin({
          babyName,
          guardian,
          phone,
          periodOfStay,
          amountPaid,
          checkin,
          assignSitter,
          notes
        });

        // save the new admin data to database
        await newBabycheckin.save();
        res.redirect('/babycheckin')
      } else {
        // Is executed when a baby with the same name is checkedin to the system
        res.json({ message: 'Baby already checkedin.' });
      }
    } catch (err) {
      // response when a server side error has prevented a baby from being saved
      res.json({ message: 'failed to checkin baby' });
    }
  } else {
    // incase a user submits an empty request
    res.json({ message: 'empty request error!' });
  }
});

router.get("/babycheckout", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, "../views/babycheckout"))
});

router.post("/babycheckout", (req, res) => {
  res.render(path.join(__dirname, "../views/babycheckout"))
});

router.get("/babyReg", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, "../views/babyReg"))
});

router.post("/babyReg", async (req, res) => {
  if (req.body != null) {
    try {
      // recieve baby registration data from the request object
      const {
        fName, dateOfBirth, gender, location, parentName, parentContact, babyNumber 
      } = req.body;

      // Check if the a baby of the same name is registered
      const baby = await Baby.findOne({ fName });

      if (!baby) {
        // create a new baby variable
        const newBaby = new Baby({
          fName,
          dateOfBirth,
          gender,
          location,
          parentName,
          parentContact,
          babyNumber
        });

        // save the new admin data to database
        await newBaby.save();
        res.redirect('/babyReg')
      } else {
        // Is executed when a baby with the same name is already registered in the system
        res.json({ message: 'Baby already registered.' });
      }
    } catch (err) {
      // response when a server side error has prevented a baby from being saved
      res.json({ message: 'failed to save new baby' });
    }
  } else {
    // incase a user submits an empty request
    res.json({ message: 'empty request error!' });
  }
});
  
router.get("/sitterReg", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, "../views/sitterReg"))
});

router.post("/sitterReg", async (req, res) => {
  if (req.body != null) {
    try {
      // recieves sitter registration data from the request object
      const {
        fullName, location, nin, contact, recommenderName, educationLevel, dateOfBirth, gender, sitterNumber, present
      } = req.body;

      // Check if the a sitter of the same name is registered
      const sitter = await Sitter.findOne({ fullName });

      if (!sitter) {
        // create a new sitter variable
        const newSitter = new Sitter({
          fullName,
          location,
          nin,
          contact,
          recommenderName,
          educationLevel,
          dateOfBirth,
          gender,
          sitterNumber,
          present
        });

        // save the new admin data to database
        await newSitter.save();
        res.redirect('/sitterReg');
      } else {
        // Is executed when a sitter with the same name is already registered in the system
        res.json({ message: 'Sitter already registered.' });
      }
    } catch (err) {
      // response when a server side error has prevented a sitter from being saved
      res.json({ message: 'failed to save new sitter', error:err });
    }
  } else {
    // incase a user submits an empty request
    res.json({ message: 'empty request error!' });
  }
});
  


router.get("/login", (req, res) => {
  res.render(path.join(__dirname, "../views/login"))
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect('/index')
});

router.get("/landing", (req, res) => {
  res.render(path.join(__dirname, "../views/landing"))
});

router.post("/landing", (req, res) => {
  res.render(path.join(__dirname, "../views/landing"))
});

router.get('/procurements', ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, '../views/procurements'))
});

router.post('/procurements', (req, res) => {
  res.render(path.join(__dirname, '../views/procurements'))
});

module.exports = router;
