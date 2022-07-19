const express = require("express");
const router = express.Router();
const db = require("../db/knex");

router.get("/", async (req, res) => {
  try {
    const users = await db("users").select("*").timeout(1500);
    res.send(users).status(200);
  } catch (err) {
    res.send(err).status(404);
  }
});

module.exports = router;
