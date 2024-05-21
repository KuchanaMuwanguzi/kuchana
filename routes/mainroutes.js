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
const Payments = require('../models/Payments.js')

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

router.post("/babycheckin", (req, res) => {
  res.render(path.join(__dirname, "../views/babycheckin"))
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

router.get("/babyReg", (req, res) => {
  res.render(path.join(__dirname, "../views/babyReg"))
});

router.get("/sitterReg", ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, "../views/sitterReg"))
});

router.post("/sitterReg", (req, res) => {
  res.render(path.join(__dirname, "../views/sitterReg"))
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

router.get('/payments', ensurelogin.ensureLoggedIn(), (req, res) => {
  res.render(path.join(__dirname, '../views/payments'))
});

router.post('/payments', (req, res) => {
  res.render(path.join(__dirname, '../views/payments'))
});

module.exports = router;
