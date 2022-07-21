const express = require("express");
const userController = require("../controllers/userController");

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use("/", express.static("public"));
  app.use("/api/users", userController);

  return app;
};

module.exports = { setupServer };
