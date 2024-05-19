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


router.get("/index", (req, res) => {
  res.render(path.join(__dirname, "../views/index"));
});

router.get("/adminReg", (req, res) => {
  res.render(path.join(__dirname, "../views/adminReg"));
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

router.get("/babycheckin", (req, res) => {
  res.render(path.join(__dirname, "../views/babycheckin"));
});

router.post("/babycheckin", (req, res) => {
  res.render(path.join(__dirname, "../views/babycheckin"));
});

router.get("/babycheckout", (req, res) => {
  res.render(path.join(__dirname, "../views/babycheckout"));
});

router.post("/babycheckout", (req, res) => {
  res.render(path.join(__dirname, "../views/babycheckout"));
});

router.get("/babyReg", (req, res) => {
  res.render(path.join(__dirname, "../views/babyReg"));
});

router.get("/babyReg", (req, res) => {
  res.render(path.join(__dirname, "../views/babyReg"));
});

router.get("/sitterReg", (req, res) => {
  res.render(path.join(__dirname, "../views/sitterReg"));
});

router.post("/sitterReg", (req, res) => {
  res.render(path.join(__dirname, "../views/sitterReg"));
});

router.get("/login", (req, res) => {
  res.render(path.join(__dirname, "../views/login"));
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect('/index')
    res.json({ message: "login successful" });
});

router.get("/landing", (req, res) => {
  res.render(path.join(__dirname, "../views/landing"));
});

router.post("/landing", (req, res) => {
  res.render(path.join(__dirname, "../views/landing"));
});

module.exports = router;
