/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.alterTable("planes_users_follow", function (table) {
    table.dropColumn("user_id");
  });
  return await knex.schema.alterTable("users", function (table) {
    table.dropPrimary();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("users", function (table) {
    table.primary("id");
  });
  await knex.schema.alterTable("planes_users_follow", function (table) {
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
};
