const knex = require("knex");
require("dotenv").config();
const config = require("../knexfile.js");

module.exports = knex(config);
