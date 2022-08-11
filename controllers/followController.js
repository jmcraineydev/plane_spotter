const express = require("express");
const router = express.Router();
const db = require("../db/knex");

router.get("/", async (req, res) => {
  try {
    const follows = await db("planes_users_follow").select("*").timeout(1500);
    res.send(follows).status(204);
  } catch (err) {
    res.send(err).status(404);
  }
});

router.post("/", async (req, res) => {
  const newFollow = {
    user_name: req.body.user_name,
    plane_reg: req.body.plane_reg,
  };
  try {
    await db("planes_users_follow").insert(newFollow).timeout(1500);
    res.send(newFollow).status(204);
  } catch (err) {
    res.send(err).status(404);
  }
});

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await db("planes_users_follow")
      .where("user_name", username)
      .from("flight_data")
      .join(
        "planes_users_follow",
        "flight_data.reg_number",
        "=",
        "planes_users_follow.plane_reg"
      )
      .select(
        "airline_iata",
        "reg_number",
        "flag",
        "speed",
        "alt",
        "dir",
        "arr_iata",
        "status"
      )
      .timeout(15000);
    res.send(user, "This is a test").status(204);
  } catch (err) {
    res.send(err).status(404);
  }
});

router.delete("/:username", async (req, res) => {
  const { username } = req.params;
  const { plane_reg } = req.body;
  try {
    await db("planes_users_follow")
      .where("user_name", username)
      .where("plane_reg", plane_reg)
      .del()
      .timeout(1500);
    res.status(204).end();
  } catch (err) {
    res.send(err).status(404);
  }
});

router.patch("/:username", async (req, res) => {
  const { username } = req.params;
  const { old_plane_reg, new_plane_reg } = req.body;
  try {
    await db("planes_users_follow")
      .where("user_name", username)
      .where("plane_reg", old_plane_reg)
      .update("plane_reg", new_plane_reg)
      .timeout(1500);
    res.status(204).end();
  } catch (err) {
    res.send(err).status(404);
  }
});

module.exports = router;
