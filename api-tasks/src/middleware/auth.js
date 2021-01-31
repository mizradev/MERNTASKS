const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // read token
    const token = req.header('x-auth-token');
    // there token
    if(!token) return res.status(401).json({msg: 'Access denied', error: true});

    // token validate
    try{
        const cryto = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = crypto.user;
        next();
    }catch(err){
        res.status(401).json({msg: 'Token invalid', error: true});
    }
}