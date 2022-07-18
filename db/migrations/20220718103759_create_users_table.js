/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("user_name", 32).unique().notNullable().index();
    table.string("email", 32).unique().notNullable().index();
    table.string("first_name", 32);
    table.string("last_name", 32).notNullable();
    table.string("city", 32);
    table.string("postal_code", 20).notNullable();
    table.string("country", 32).notNullable();
    table.string("region", 32);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("users");
};
