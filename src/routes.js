const routes = require("express").Router();

const SessionController = require("./app/controller/SessionController");
// const { User } = require("./app/models");

routes.post("/sessions", SessionController.store);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

module.exports = routes;
