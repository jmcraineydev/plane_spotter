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

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await db("users")
      .select("*")
      .where("user_name", username)
      .timeout(1500);
    res.send(user).status(204);
  } catch (err) {
    res.send(err).status(404);
  }
});

router.patch("/:username", async (req, res) => {
  const { username } = req.params;
  const edits = req.body;
  try {
    await db("users").where("user_name", username).update(edits);
    res.status(204).end();
  } catch (err) {
    res.send(err).status(404);
  }
});

router.post("/", async (req, res) => {
  const newUser = req.body;
  try {
    await db("users").insert(newUser);
    res.status(204).end();
  } catch (err) {
    res.send(err).status(400);
  }
});

router.delete("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    await db("users").where("user_name", username).del().timeout(1500);
    res.status(204).end();
  } catch (err) {
    res.send(err).status(404);
  }
});

module.exports = router;
