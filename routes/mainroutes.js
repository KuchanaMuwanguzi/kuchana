const router = require ('express').Router();

const path = require('path');
const {registerAdmin, registerBaby, registerSitter} = require ('../controllers/RegController.js')

router.get('/index', (req, res)=>{
    res.render(path.join(__dirname, '../views/index'));
})

router.get('/adminReg', (req, res)=>{
    res.render(path.join(__dirname, '../views/adminReg'));
 })

 router.post('/adminReg', registerAdmin, (req, res)=>{
    res.redirect('/index');
 })

router.get('/babycheckin', (req, res)=>{
    res.render(path.join(__dirname, '../views/babycheckin'));
})

router.post('/babycheckin', (req, res)=>{
    res.render(path.join(__dirname, '../views/babycheckin'));
})

router.get('/babycheckout', (req, res)=>{
    res.render(path.join(__dirname, '../views/babycheckout'));
})

router.post('/babycheckout', (req, res)=>{
    res.render(path.join(__dirname, '../views/babycheckout'));
})

router.get('/babyReg', (req, res)=>{
    res.render(path.join(__dirname, '../views/babyReg'));
})

router.get('/babyReg', (req, res)=>{
    res.render(path.join(__dirname, '../views/babyReg'));
})


router.get('/sitterReg', (req, res)=>{
    res.render(path.join(__dirname, '../views/sitterReg'));
})

router.post('/sitterReg', (req, res)=>{
    res.render(path.join(__dirname, '../views/sitterReg'));
})

module.exports = router