var express = require('express');
var router = express.Router();

router.get('/', function (_, res) {
    const healthCheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthCheck);
    } catch (error) {
        healthCheck.message = error;
        res.status(503).send();
    }
});

module.exports = router;
