const ProfileModel = require("../models/ProfileModel");
const jwt = require("jsonwebtoken");

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
            exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
            data: data[0],
          };

          const  token = jwt.sign(payload, "jwtsecret");

          res.status(201).json({ status: "Login Success", data:data[0],token });
        } else {
          res.status(400).json({ status: "Unauthorized" });
        }
      }
    }
  );
};
