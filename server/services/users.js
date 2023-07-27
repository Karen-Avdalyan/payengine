const payengineService = require('./payengine')
const userRepo = require('../repositories/users')

module.exports = {
    async getCurrentUser(req, res) {
        const { id } = req.user
        try {
            const user = await userRepo.findOne({ id })

            res.status(200).json({
                status: 'Success',
                data: {
                    id: user.id,
                    email: user.email,
                    merchantId: user.merchant_id,
                    merchantIdHash: user.merchant_id_hash
                },
            })
        } catch (ex) {
            console.error(ex)
            res.status(500).json({
                status: 'Failed',
                message: 'Something went wrong',
            })
        }
    },
    async createMerchantAccount(req, res) {
        const { id, email } = req.user
        try {
            const user = await userRepo.findOne({ id })

            const response = await payengineService.createMerchant({
                id: user.id,
                name: user.name,
                email: user.email
            })
            const { merchantHmac, merchantId } = response
            await userRepo.update({ id }, { merchant_id: merchantId, merchant_id_hash: merchantHmac })

            res.status(200).json({
                status: 'Success',
                message: 'Merchant Added Successfully!',
                data: {
                    id,
                    email,
                    merchantId,
                    merchantIdHash: merchantHmac
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
