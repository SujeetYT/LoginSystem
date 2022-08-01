const signUpModel = require("../Models/authSchema");
const bcrypt = require("bcrypt");

exports.signup = async (req, res)=>{
    const {name, email, password, confirmPassword} = req.body;

    if(password === confirmPassword){
        const hashPassword = await bcrypt.hash(password, 10);

        const signUpData = new signUpModel({name, email, hashPassword});

        signUpData.save().then(()=>{
            return res.status(201).json({
                message : "Signup Success !"
            });
        }).catch((err)=>{
            console.log(err.message);
            res.send(err.message);
        })
    }else{
        res.json({
            message : "Password do not match"
        });
    }
}

exports.login = async (req,res)=>{
    const {email, password} = req.body;

    const user = await signUpModel.findOne({email : email});
    if(user !== null){
        const correctPassword = await bcrypt.compare(password, user.hashPassword);
        if(correctPassword){
            res.json({
                message : "Logged in",
                name : user.name
            }).status(201);
        }else{
            res.json({
                message : "Incorrect Password"
            }).status(400);
        }
    }else{
        res.json({
            message : "User Not Found"
        }).status(400);
    }
}