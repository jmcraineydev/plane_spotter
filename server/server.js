const express = require("express");
const userController = require("../controllers/userController");
const followController = require("../controllers/followController");

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use("/", express.static("public"));
  app.use("/api/users", userController);
  app.use("/api/follows", followController);

  return app;
};

module.exports = { setupServer };
