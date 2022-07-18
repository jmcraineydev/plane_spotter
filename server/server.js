const express = require("express");

const setupServer = () => {
  const app = express();
  app.use(express.json());

  return app;
};

module.exports = { setupServer };
