const express = require('express');
const router = express.Router();

const validation = require('../middlewares/validation')
const { login, register } = require('../services/auth')

router.post('/login', validation.login, login);
router.post('/register', validation.register, register);

module.exports = router;
