/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const usersData = require("../../data/users");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  try {
    await knex("users").insert(usersData);
  } catch (err) {
    console.log(err);
  }
};
