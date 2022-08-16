const ProfileModel = require("../models/ProfileModel");
const jwt = require("jsonwebtoken");

// user registration
exports.CreateProfile = (req, res) => {
  let reqBody = req.body;
  ProfileModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Success", data });
    }
  });
};

// user login
exports.UserLogin = (req, res) => {
  const { UserName, Password } = req.body;
  ProfileModel.find(
    { UserName: UserName, Password: Password },
    (error, data) => {
      if (error) {
        res.status(400).json({ status: "Login Fail" });
      } else {
        if (data.length > 0) {
          const payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            data: data[0],
          };
          const token = jwt.sign(payload, "jwtsecret");
          res
            .status(201)
            .json({ status: "Login Success", data: data[0], token });
        } else {
          res.status(400).json({ status: "Unauthorized" });
        }
      }
    }
  );
};

// view user profile
exports.SelectProfile = (req, res) => {
  let UserName = req.headers["username"];

  ProfileModel.find({ UserName: UserName }, (error, data) => {
    if (error) {
      res.status(400).json({ status: "Fail" });
    } else {
      res
        .status(200)
        .json({ status: "Single Profile get success", data: data[0] });
    }
  });
};
// update user profile
exports.UpdateProfile=(req,res)=>{
  let UserName=req.headers['username']
  let reqBody=req.body;
  ProfileModel.updateOne({UserName:UserName},{$set:reqBody},{upsert:true},(err,data)=>{
      if(err){
          res.status(400).json({status:"fail",data:err})
      }
      else {
          res.status(200).json({status:"success",data:data})
      }
  })
}
