const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")

dotenv.config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("connected to MongoDB"))
.catch(err=>console.log(err));



app.listen("5001", () => {
    console.log("Backend is running.");
});