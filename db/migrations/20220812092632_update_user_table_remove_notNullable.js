/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.setNullable("last_name");
    table.setNullable("postal_code");
    table.setNullable("country");
    table.string("uid", 128);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.dropColumn("uid");
    table.dropNullable("country");
    table.dropNullable("postal_code");
    table.dropNullable("last_name");
  });
};
