/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 *
 *
 */

const flightsData = require("../../data/flightdatasample");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("flight_data").del();
  try {
    //await knex("flight_data").insert(flightsData);
    for (const flight of flightsData) {
      if (flight.flag === "US" || flight.flag === "JP") {
        const newFlight = {
          hex: flight.hex,
          reg_number: flight.reg_number,
          flag: flight.flag,
          lat: flight.lat,
          lng: flight.lng,
          alt: flight.alt,
          dir: flight.dir,
          speed: flight.speed,
          v_speed: flight.v_speed,
          flight_number: flight.flight_number,
          flight_icao: flight.flight_icao,
          flight_iata: flight.flight_iata,
          dep_icao: flight.dep_icao,
          dep_iata: flight.dep_iata,
          arr_icao: flight.arr_icao,
          arr_iata: flight.arr_iata,
          airline_icao: flight.airline_icao,
          airline_iata: flight.airline_iata,
          aircraft_icao: flight.aircraft_icao,
          updated: flight.updated,
          status: flight.status,
        };
        await knex("flight_data").insert(newFlight);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
