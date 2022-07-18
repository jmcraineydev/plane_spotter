/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("flight_data", function (table) {
    table.increments("id").primary();
    table.string("hex", 18);
    table.string("reg_number", 32);
    table.string("flag", 3);
    table.float("lat", 32);
    table.float("lng", 32);
    table.integer("alt", 20);
    table.integer("dir", 3);
    table.integer("speed", 5);
    table.float("v_speed", 32);
    table.string("flight_number", 10);
    table.string("flight_icao", 10);
    table.string("flight_iata", 10);
    table.string("dep_icao", 4);
    table.string("dep_iata", 3);
    table.string("airline_icao", 3);
    table.string("airline_iata", 2);
    table.string("aircraft_icao", 5);
    table.integer("updated", 20);
    table.string("status", 20);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("flight_data");
};
