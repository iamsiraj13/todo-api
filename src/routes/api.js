const express = require('express');
const { CreateProfile, UserLogin } = require('../controllers/ProfileController');
const router = express.Router();

router.post('/ProfileCreate',CreateProfile) 

router.post('/UserLogin',UserLogin) 

module.exports = router