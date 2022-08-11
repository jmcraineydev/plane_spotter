/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return await knex.schema.alterTable("users", function (table) {
    table.string("password", 255).notNullable();
  });

  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function (knex) {
    await knex.schema.alterTable("users", function (table) {
      table.dropPrimary();
      table.dropColumn("password");
    });
  };
};
