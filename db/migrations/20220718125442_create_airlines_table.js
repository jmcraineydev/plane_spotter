/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("airlines", function (table) {
    table.increments("id").primary();
    table.string("icao_code", 3).notNullable();
    table.string("iata_code", 2).notNullable();
    table.string("name").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("airlines");
};
