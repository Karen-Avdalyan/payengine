function checkFieldExistence(obj, fields) {
    for (const field of fields) {
        if (!obj[field]) return false
    }
    return true
}

module.exports = {
    login(req, res, next) {
        if (checkFieldExistence(req.body, ['email', 'password'])) return next()
        res.status(400).json({
            status: 'Failed',
            message: 'Missing fields in request body',
        });
    },
    register(req, res, next) {
        if (checkFieldExistence(req.body, ['name', 'email', 'password'])) return next()
        res.status(400).json({
            status: 'Failed',
            message: 'Missing fields in request body',
        });
    },
}
