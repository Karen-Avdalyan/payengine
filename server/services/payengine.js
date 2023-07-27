const axios = require('axios')
const { createHmac } = require('../helpers/hash')

const axiosInstance = axios.create({
    baseURL: process.env.PAYENGINE_API_BASE_URL,
    headers: {
        Authorization: 'Basic ' + process.env.PAYENGINE_API_SECRET,
        'Content-Type': 'application/json'
    }
})

module.exports = {
    async createMerchant({ id, name, email }) {
        const { data: axiosData } = await axiosInstance.post('/merchant', {
            external_id: id,
            email,
            name
        }, {

        })

        const { id: merchantId } = axiosData.data
        const merchantHmac = createHmac(merchantId, process.env.PAYENGINE_API_SECRET)

        return { merchantId, merchantHmac }
    }
}
