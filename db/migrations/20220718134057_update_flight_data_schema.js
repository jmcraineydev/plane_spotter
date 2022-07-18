/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("flight_data", function (table) {
    table.dropNullable("reg_number", 32);
    table.dropNullable("flight_number", 10);
    table.dropNullable("flight_icao", 10);
    table.dropNullable("flight_iata", 10);
    table.dropNullable("dep_icao", 4);
    table.dropNullable("dep_iata", 3);
    table.dropNullable("updated", 20);
    table.dropNullable("airline_icao", 3);
    table.dropNullable("airline_iata", 2);
    table.dropNullable("status", 20);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("flight_data", function (table) {
    table.setNullable("reg_number", 32).alter();
    table.setNullable("flight_number", 10).alter();
    table.setNullable("flight_icao", 10).alter();
    table.setNullable("flight_iata", 10).alter();
    table.setNullable("dep_icao", 4).alter();
    table.setNullable("dep_iata", 3).alter();
    table.setNullable("updated", 20).alter();
    table.setNullable("airline_icao", 3).alter();
    table.setNullable("airline_iata", 2).alter();
    table.setNullable("status", 20).alter();
  });
};
