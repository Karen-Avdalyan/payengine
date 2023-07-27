require('dotenv').config();
const { hashPassword } = require('../../helpers/hash')

function getDefaultUser() {
  const hashedPassword = hashPassword('test1234', process.env.PASSWORD_SALT)

  return ({
    name: 'Karen',
    email: 'test@test.com',
    password: hashedPassword
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('users').insert([
    getDefaultUser()
  ]);
};
