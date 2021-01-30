const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers');

const { check } = require('express-validator');

// created user
router.post('/', [
    check('name', 'The name is require').not().isEmpty(),
    check('email', 'The email is require').isEmail(),
    check('password', 'The password must have at least 6 characters').isLength({min: 6}),
],userCtrl.createUser);

// auth
router.post('/', [
    check('email', 'The email is require').isEmail(),
    check('password', 'The password must have at least 6 characters').isLength({min: 6}),
],userCtrl.auth);


module.exports = router;