const User = require('../models/User');

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {

    // validations data
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({
        msg: errors.array(),
        error: true
    })

    const { email, password } = req.body;

    try{
        let user = new User.findOne({ email });

        if(user) return res.status(400).json({
            msg: 'This email is already registered 😢',
            error: true
        })
        
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        
        await user.save();

        // create jwt
        const payload = {
            user: {
                id: user.id
            }
        }

        // signature jwt
        jwt.sign(payload, process.env.TOKEN_SECRET,{
            expiresIn: 3600 // 1 hour
        }, (err, token) => {
            if (err) throw err;

            res.json({
                token 
            })
        })
        //res.status(200).json({msg:'User created successfull! 😎', error: false});
    }catch(err){
        res.status(400).json({msg: 'Hubo un error al crear el usuario', error: true})
        console.log(err);
    }
    
}