const express = require('express');
const router = express.Router();
const {Products} = require('../dbConnection/schemas')


router.get('/',(req,res)=>{
    res.render('form',{style:'style'})
})

// router.get('/form',(req,res)=>{
//     res.render('form');
// })



router.get('/get',(req,res)=>{
   Products.find({brand:req.query.prod})
    .then((doc)=>{
        console.log(doc);
        res.render('form',{doc})
    },(e)=>{
        res.status(400).send(e);
    })   
})
router.get('/gallery',(req,res)=>{
    res.render('pics',{style:'gallery'});
})


module.exports = router;

