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
        let user = await User.findOne({ email });

        if (user) return res.status(400).json({
            msg: 'This email is already registered 😢',
            error: true
        })
        

        user = new User(req.body);
        
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

            res.header('token', token).status(200).json({msg: 'User created successfull! 😎',token, error: false})
        })
        //res.status(200).json({msg:'User created successfull! 😎', error: false});
    }catch(err){
        res.status(400).json({msg: 'There was an error registering the user', error: true})
        console.log(err);
    }
    
}

exports.auth = async (req, res) => {
    // validations data
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({
        msg: errors.array(),
        error: true
    })

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });
        if(!user) return res.status(400).json({
            msg: 'The user does not exist',
            error: true
        });

        const correctPass = await bcrypt.compare(password, user.password);
        if(!correctPass) return res.status(400).json({
            msg: 'Incorrect password',
            error: true
        });

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

            res.header('token', token).status(200).json({
                token,
                error: false,
                msg: 'login user success'
            })
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: 'There was an error authenticating the user', error: true})
        
    }
}