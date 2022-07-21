/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("flight_data", function (table) {
    table.setNullable("reg_number");
    table.setNullable("flight_number");
    table.setNullable("flight_icao");
    table.setNullable("flight_iata");
    table.setNullable("dep_icao");
    table.setNullable("dep_iata");
    table.setNullable("updated");
    table.setNullable("airline_icao");
    table.setNullable("airline_iata");
    table.setNullable("status");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("flight_data", function (table) {
    table.dropNullable("flight_icao");
    table.dropNullable("flight_iata");
    table.dropNullable("dep_icao");
    table.dropNullable("reg_number");
    table.dropNullable("flight_number");
    table.dropNullable("dep_iata");
    table.dropNullable("updated");
    table.dropNullable("airline_icao");
    table.dropNullable("airline_iata");
    table.dropNullable("status");
  });
};
