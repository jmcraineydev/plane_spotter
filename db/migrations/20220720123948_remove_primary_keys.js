/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.alterTable("planes_users_follow", function (table) {
    table.dropPrimary();
  });
  await knex.schema.alterTable("airports", function (table) {
    table.dropPrimary();
  });
  await knex.schema.alterTable("airlines", function (table) {
    table.dropPrimary();
  });
  await knex.schema.alterTable("flight_data", function (table) {
    table.dropPrimary();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.alterTable("planes_users_follow", function (table) {
    table.primary("id");
  });
  await knex.schema.alterTable("airports", function (table) {
    table.primary("id");
  });
  await knex.schema.alterTable("airlines", function (table) {
    table.primary("id");
  });
  await knex.schema.alterTable("flight_data", function (table) {
    table.primary("id");
  });
};
