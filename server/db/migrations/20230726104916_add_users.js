/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.primary('id')
    table.string('name', 255).notNullable()
    table.string('email', 255).unique().notNullable()
    table.string('password', 255).notNullable()
    table.string('merchant_id').nullable()
    table.string('merchant_id_hash').nullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
