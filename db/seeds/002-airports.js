/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const airportsData = require("../../data/airports");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("airports").del();
  try {
    for (const airport of airportsData) {
      if (!airport.iata_code) {
        continue;
      }
      if (airport.country_code === "US" || airport.country_code === "JP") {
        await knex("airports").insert(airport);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
