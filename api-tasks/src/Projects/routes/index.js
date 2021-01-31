const express = require('express');
const router = express.Router();

const ProjectCtrl = require('../ProjectCtrl');

const auth = require('../../middleware/auth');

//create a project
router.post('/', auth, ProjectCtrl.createProject);

module.exports = router;