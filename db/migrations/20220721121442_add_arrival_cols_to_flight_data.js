/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("flight_data", function (table) {
    table.string("arr_icao", 4);
    table.string("arr_iata", 3);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("flight_data", function (table) {
    table.dropColumn("arr_icao");
    table.dropColumn("arr_iata");
  });
};
