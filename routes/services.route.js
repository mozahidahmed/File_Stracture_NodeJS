const express = require("express");
// const { getAllServices } = require("../controllers/services.controller");
const servicesControllers=require('../controllers/services.controller')

const router=express.Router();




router
.route('/')
// .get(getAllServices)
 .get(servicesControllers.getAllServices)



.post((req,res)=>{
    res.send('amio post route')
})


module.exports=router