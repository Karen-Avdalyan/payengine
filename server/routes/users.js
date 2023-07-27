const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth')
const { getCurrentUser, createMerchantAccount } = require('../services/users')

router.get('/me', authMiddleware, getCurrentUser);
router.put('/addMerchant', authMiddleware, createMerchantAccount);

module.exports = router;
