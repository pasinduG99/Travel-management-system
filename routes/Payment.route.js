const express = require('express');
const router =express.Router();
 const{
    addPayment,
    getPayments,
    updatePayment,
    removePayment,
    getPaymentById,
    getCard
 } = require('../controllers/Payment.controller');

router.get("/all", getPayments);

router.post("/",addPayment);

router.get("/:id",getPaymentById);



router.put("/:id",updatePayment);

router.delete("/:id",removePayment);



module.exports = router; 
