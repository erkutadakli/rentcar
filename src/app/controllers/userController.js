const messages = require('../middleware/messages');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const UserModel = require('../models/userModel');


exports.register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            messages.error(http,500, null);
        }
        const user = new UserModel({
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            permissionLevel: req.body.permissionLevel
        });
        user.save()
            .then(resp => {
                messages.success(res,200, resp)
            })
            .catch(err => {
                messages.error(res,500, err)
            })
    })

}
exports.login = (req,res,next)=> {
    UserModel.find({ email: req.body.email })
    .exec()
    .then(user=> {
        if (user.length < 1) {
            return messages.error(res,401,{message:"Auth failed"})
          }

          bcrypt.compare(req.body.password, user[0].password, (err, result) => { 
            if (err) { 
                return messages.error(res,401,{message:"Auth failed"})
            }
            if (result) {
                const token = jwt.sign(
                  {
                    email: user[0].email,
                    userId: user[0]._id
                  },
                  'rent',
                  {
                      expiresIn: "1h"
                  }
                );
                return messages.success(res,200,token);
              }
              return messages.error(res,401,{message:"Auth failed"})
          })
    })
}