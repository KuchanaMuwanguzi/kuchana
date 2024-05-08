const Admin = require("../models/Admin");

const Baby = require("../models/Baby");

const Sitter = require("../models/Sitter");

exports.registerAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;
  Admin.register({ name, email }, password, (error, admin) => {
    if (error) {
      res.json({ message: error });
    } else {
      next();
    }
  });
};

exports.registerBaby = async (req, res, next) => {
  try {
    const {
      name,
      dateOfBirt,
      gender,
      location,
      motherName,
      motherContact,
      fatherNmae,
      fatherContact,
      babaNumber,
    } = req.body;

    const baby = await Baby.findOne({ name });
    if (!baby) {
      const newBaby = new Baby({
        name,
        dateOfBirt,
        gender,
        location,
        motherName,
        motherContact,
        fatherNmae,
        fatherContact,
        babaNumber,
      });
      await newBaby.save();
      next();
    } else {
      res.json({ message: "baby already registered" });
    }
  } catch (error) {
    res.json({ message: "failed to save new babay" });
  }
};

exports.registerSitter = async (req, res, next) => {
  try {
    const {
      name,
      location,
      nin,
      contct,
      recoomenderName,
      educatioLevel,
      dateOfBirt,
      gender,
      sitterNumber,
    } = req.body;

    const sitter = await Sitter.findOne({ name });
    if (!sitter) {
      const newSitter = new Sitter({
        name,
        location,
        nin,
        contct,
        recoomenderName,
        educatioLevel,
        dateOfBirt,
        gender,
        sitterNumber,
      });
      await newSitter.save();
      next();
    } else {
      res.json({ message: "sitter already registered" });
    }
  } catch (error) {
    req.json({ message: "Failed to save sitter" });
  }
};
