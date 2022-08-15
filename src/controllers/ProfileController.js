const ProfileModel = require("../models/ProfileModel");

exports.CreateProfile=( req, res )=>{
    let reqBody = req.body;
    ProfileModel.create(reqBody,( err, data)=>{
    if( err ){
        res.status(400).json({status:'Fail',data:err})
    }else{
        res.status(200).json({status:'Success',data})
    }
    })
}
exports.UserLogin=( req, res )=>{ 
    const {UserName,Password}=req.body

    res.json({UserName,Password})
    
}