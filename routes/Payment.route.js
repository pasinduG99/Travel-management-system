const express = require('express');
const router =express.Router();
 const{
    addPayment,
    getPayments,
    updatePayment,
    removePayment
 } = require('../controllers/Payment.controller');

router.get("/all", getPayments);


router.post("/",addPayment);

router.put("/:id",updatePayment);

router.delete("/:id",removePayment);



module.exports = router; 
