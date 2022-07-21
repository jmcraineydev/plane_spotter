/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("flight_data", function (table) {
    table.string("hex", 32).alter();
    table.string("reg_number", 32).alter();
    table.string("flag", 20).alter();
    table.float("lat", 32).alter();
    table.float("lng", 32).alter();
    table.integer("alt", 32).alter();
    table.integer("dir", 20).alter();
    table.integer("speed", 20).alter();
    table.float("v_speed", 32).alter();
    table.string("flight_number", 20).alter();
    table.string("flight_icao", 20).alter();
    table.string("flight_iata", 20).alter();
    table.string("dep_icao", 20).alter();
    table.string("dep_iata", 20).alter();
    table.string("arr_icao", 20).alter();
    table.string("arr_iata", 20).alter();
    table.string("airline_icao", 20).alter();
    table.string("airline_iata", 20).alter();
    table.string("aircraft_icao", 20).alter();
    table.integer("updated", 32).alter();
    table.string("status", 32).alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("flight_data", function (table) {
    table.string("hex", 18).alter();
    table.string("reg_number", 32).alter();
    table.string("flag", 3).alter();
    table.float("lat", 32).alter();
    table.float("lng", 32).alter();
    table.integer("alt", 20).alter();
    table.integer("dir", 3).alter();
    table.integer("speed", 5).alter();
    table.float("v_speed", 32).alter();
    table.string("flight_number", 10).alter();
    table.string("flight_icao", 10).alter();
    table.string("flight_iata", 10).alter();
    table.string("dep_icao", 4).alter();
    table.string("dep_iata", 3).alter();
    table.string("arr_icao", 4).alter();
    table.string("arr_iata", 3).alter();
    table.string("airline_icao", 3).alter();
    table.string("airline_iata", 2).alter();
    table.string("aircraft_icao", 5).alter();
    table.integer("updated", 20).alter();
    table.string("status", 20).alter();
  });
};
