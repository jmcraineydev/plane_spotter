/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("planes_users_follow", function (table) {
    table
      .string("user_name")
      .notNullable()
      .references("user_name")
      .inTable("users")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("planes_users_follow", function (table) {
    table.dropColumn("user_name");
  });
};
