/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return await knex.schema.alterTable("users", function (table) {
    table.string("password", 255).notNullable();
    table
      .uuid("user_uid")
      .primary()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("users", function (table) {
    table.dropPrimary();
    table.dropColumn("user_uid");
    table.dropColumn("password");
  });
};
