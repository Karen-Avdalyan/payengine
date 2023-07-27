const dbEngine = process.env.ENVIRONMENT || "development"
const config = require("../knexfile")[dbEngine]

module.exports = require("knex")(config)
