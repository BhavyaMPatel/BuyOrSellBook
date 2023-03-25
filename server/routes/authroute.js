const { Router }=require('express');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const createToken=(userid)=>{
    return jwt.sign({userid},'hello',{expiresIn:'1d'})
}

const routes =Router();

routes.post('/singup',async (req,res)=>{
const {userid,email,password} = req.body;
console.log(req.body);

try{
    
    const user=await User.singup(userid,email,password);
    // const token=createToken(userid);
    res.status(200).json({userid});
}catch(err){
    res.status(400).json({error:err.message});

}

})


routes.post('/login',async(req,res)=>{
    
const {userid,password}=req.body;
try{
const login=await User.login(userid,password);
const token=createToken(userid);
res.status(200).json({userid,login,token});

}catch(err){
res.status(400).json({error:err.message});
}
 
})

module.exports = routes