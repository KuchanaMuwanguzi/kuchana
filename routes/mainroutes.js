const router = require ('express').Router();

const path = require('path');

router.get('/index', (req, res)=>{
    res.render(path.join(__dirname, '../views/index'));
})

router.get('/adminReg', (req, res)=>{
    res.render(path.join(__dirname, '../views/adminReg'));
 })

router.get('/babycheckin', (req, res)=>{
    res.render(path.join(__dirname, '../views/babycheckin'));
})

router.get('/babycheckout', (req, res)=>{
    res.render(path.join(__dirname, '../views/babycheckout'));
})

router.get('/babyReg', (req, res)=>{
    res.render(path.join(__dirname, '../views/babyReg'));
})

router.get('/sitterReg', (req, res)=>{
    res.render(path.join(__dirname, '../views/sitterReg'));
})

module.exports = router