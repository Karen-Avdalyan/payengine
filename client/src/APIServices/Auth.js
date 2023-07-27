import BaseService from "./base";

export default class AuthService extends BaseService {
    constructor() {
        super('auth')
    }

    async login(email, password) {
        try {
            const { data } = await this.post('login', { email, password })
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

    async register(name, email, password) {
        try {
            const { data } = await this.post('register', { name, email, password })
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