/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.dropColumn("first_name");
    table.dropColumn("last_name");
    table.dropColumn("city");
    table.dropColumn("postal_code");
    table.dropColumn("country");
    table.dropColumn("region");
    table.dropColumn("password");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.string("password", 255).notNullable();
    table.string("first_name", 32);
    table.string("last_name", 32);
    table.string("city", 32);
    table.string("postal_code", 20);
    table.string("country", 32);
    table.string("region", 32);
  });
};
