/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("airports", function (table) {
    table.dropUnique("icao_code");
    table.dropUnique("iata_code");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.alterTable("airports", function (table) {
    table.unique("icao_code");
    table.unique("iata_code");
  });
};
