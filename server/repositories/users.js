const db = require('../db')

module.exports = {
    async find(condition) {
        return db('users').where(condition)
    },
    async findOne(condition) {
        return db('users').where(condition).first()
    },
    async insert(payload) {
        return db('users').insert(payload).returning("*")
    },
    async update(condition, payload) {
        return db('users').where(condition).update(payload).returning("*")
    }
}