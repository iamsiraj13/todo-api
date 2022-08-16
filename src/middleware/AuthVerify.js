
const jwt = require('jsonwebtoken')

module.exports = (req, res , next)=>{
    let token = req.headers['token-key'];

    jwt.verify(token,'jwtsecret',(error, decode)=>{

        if(error){
            res.status(401).json({status:'Unauthorized'})
        }else{

            const username = decode['data']['UserName']

            req.headers.username = username;

            next();
        }
    })
}