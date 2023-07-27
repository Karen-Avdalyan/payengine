const crypto = require("crypto");

module.exports = {
    createHmac(value, secret) {
        const hmac = crypto.createHmac(
            "sha256",
            secret
        ).update(value).digest("hex")

        return hmac
    },
    hashPassword(value, secret) {
        return crypto.pbkdf2Sync(value, secret, 1000, 64, 'sha512').toString('hex');
    }
}
