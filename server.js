const express = require("express");
const mongoose = require("mongoose");
const bodyParser =require("body-parser");
const cors = require("cors");
 require("dotenv").config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8070;

const uri = process.env.MONGO_URI;

mongoose.connect(uri,{
    useNewUrlParser:true,UseUnifiedTopology:true})
    mongoose.connection.once('open',()=>{
        console.log('MongoDB Connected')
    
})



app.use("/api/payment",require("./routes/Payment.route"));


app.listen(PORT, () =>{
    console.log(`The port is : ${PORT}`);
});

