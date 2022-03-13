const Payment = require("../models/Payment.model");

const addPayment = (req,res) =>{
    const {reference,name,method,card,time,no,amount,payf} = req.body;

    const payment = new Payment({
        reference,
        name,
        method,
        card,
        time,
        no,
        amount,
        payf,
    });

    payment
    .save()
    .then((createdPayment)=>{
        res.json(createdPayment);
    })
    .catch((error)=>{
        res.status(400).json(error);
    });
};

const getPayments = async(req,res) =>{
    try{
        const payments = await Payment.find();
        res.json(payments)
    }catch(error){
        res.status(400).json(error);
    }
};

const updatePayment = async (req,res) =>{
    const payId = req.params.id;

    try{
        const payment = await Payment.findById(payId);

        if(!payment){
            return res.status(404).json("There is no payment");
        }
        const {reference,name,method,card,time,no,amount,payf} = req.body;

        const pay = await Payment.findByIdAndUpdate(payId,{reference,name,method,card,time,no,amount,payf});

        res.status(200).json(pay);
    }catch (error){
        res.status(400).json(error.message);
    }

};

const removePayment = async (req,res) =>{
    const payId = req.params.id;

    try{
        const payment = await Payment.findById(payId);

        if(!payment){
            return res.status(404).json("There is no payment to remove");
        }
        const removePayment = await Payment.findByIdAndDelete(payId);
        res.status(200).json(removePayment);
       
    }catch (error){
        res.status(400).json(error.message);
    }


};

module.exports = {
    addPayment,
    getPayments,
    updatePayment,
    removePayment
};