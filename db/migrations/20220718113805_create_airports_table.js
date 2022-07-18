/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("airports", function (table) {
    table.increments("id").primary();
    table.string("icao_code", 4).unique();
    table.string("country_code", 4);
    table.string("iata_code", 4).unique().notNullable();
    table.float("lng", 32);
    table.float("lat", 32);
    table.string("name");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("airports");
};
