/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const followsData = require("../../data/follows");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("planes_users_follow").del();
  try {
    await knex("planes_users_follow").insert(followsData);
  } catch (err) {
    console.log(err);
  }
};
