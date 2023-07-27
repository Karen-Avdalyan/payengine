import BaseService from "./base";

export default class UsersService extends BaseService {
    customHeaders = {}

    constructor() {
        super('users')
        this.customHeaders.authorization = 'Bearer ' + localStorage.getItem('token')
    }

    async getCurrentUser() {
        try {
            const { data } = await this.get('me', { headers: this.customHeaders })
            return data
        } catch (ex) {
            console.error(ex.response)
            const { status, data } = ex.response

            return ({
                statusCode: status,
                errorMessage: data?.message
            })
        }
    }

    async createMerchantAccount() {
        try {
            const { data } = await this.put('addMerchant', undefined, { headers: this.customHeaders })
            return data
        } catch (ex) {
            console.error(ex.response)
            const { status, data } = ex.response

            return ({
                statusCode: status,
                errorMessage: data?.message
            })
        }
    }
}
