require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { signup, login } = require("./Controllers/postController");
const PORT = process.env.PORT || 3000;

const cors=require('cors')

app.use(cors({origin:true}))

const url = process.env.URL;
mongoose.connect(url).then(()=>console.log("Database Connected !")).catch((err)=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/signup", signup);
app.post("/login", login);

app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:3000`);
})