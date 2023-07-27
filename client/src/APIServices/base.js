import axios from './axios'

export default class BaseService {
    baseUrl

    /**
     * @param { string } baseUrl
    */
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    /**
     * @param { string } url
     * @param { import("axios").AxiosRequestConfig | undefined } config
     * @returns { Promise<import("axios".AxiosResponse<any, any>)> }
    */
    get(url, config) {
        return axios.get(`/${this.baseUrl}/${url}`, config)
    }

    /**
     * @param { string } url
     * @param { any } payload
     * @param { import("axios").AxiosRequestConfig | undefined } config
     * @returns { Promise<import("axios".AxiosResponse<any, any>)> }
    */
    post(url, payload, config) {
        return axios.post(`/${this.baseUrl}/${url}`, payload, config)
    }

    /**
     * @param { string } url
     * @param { any } payload
     * @param { import("axios").AxiosRequestConfig | undefined } config
     * @returns { Promise<import("axios".AxiosResponse<any, any>)> }
    */
    put(url, payload, config) {
        return axios.put(`/${this.baseUrl}/${url}`, payload, config)
    }

    /**
     * @param { string } url
     * @param { import("axios").AxiosRequestConfig | undefined } config
     * @returns { Promise<import("axios".AxiosResponse<any, any>)> }
    */
    delete(url, config) {
        return axios.delete(`/${this.baseUrl}/${url}`, config)
    }
}
