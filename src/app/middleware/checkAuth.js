const jwt = require('jsonwebtoken');
const messages = require('../middleware/messages');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'rent');
        req.userData = decoded;
        next();
    } catch (error) {
        messages.error(res,401,error)
    }
};