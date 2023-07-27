const jwt = require('jsonwebtoken')
const userRepo = require('../repositories/users')
const { hashPassword } = require('../helpers/hash')

module.exports = {
    async login(req, res) {
        const { email, password } = req.body
        try {
            const user = await userRepo.findOne({ email })

            if (!user) {
                return res.status(404).json({
                    status: 'Failed',
                    message: 'User not found',
                })
            }

            if (user.password != hashPassword(password, process.env.PASSWORD_SALT)) {
                return res.status(401).json({
                    status: 'Failed',
                    message: 'Not valid password',
                })
            }

            const tokenPayload = {
                id: user.id,
                email: user.email,
            }
            const accessToken = jwt.sign(tokenPayload, process.env.AUTH_SECRET)
            res.status(201).json({
                status: 'Success',
                message: 'User Logged In!',
                data: {
                    accessToken,
                },
            })
        } catch (ex) {
            console.error('errorna', ex)
            res.status(500).json({
                status: 'Failed',
                message: 'Something went wrong',
            })
        }
    },
    async register(req, res) {
        const { name, email, password } = req.body
        try {
            const user = await userRepo.findOne({ email })
            if (user) {
                return res.status(400).json({
                    status: 'Failed',
                    message: 'User with provided email already exist',
                })
            }

            const hashedPassword = hashPassword(password, process.env.PASSWORD_SALT)
            const response = await userRepo.insert({
                name,
                email,
                password: hashedPassword
            })
            const { id } = response[0]

            const tokenPayload = {
                id,
                email,
            }
            const accessToken = jwt.sign(tokenPayload, process.env.AUTH_SECRET)
            res.status(201).json({
                status: 'Success',
                message: 'User Registered Successfully!',
                data: {
                    accessToken,
                },
            })
        } catch (ex) {
            console.error(ex)
            res.status(500).json({
                status: 'Failed',
                message: 'Something went wrong',
            })
        }
    }
}
