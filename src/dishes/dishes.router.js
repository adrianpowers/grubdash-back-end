const dishesRouter = require("express").Router();
const dishesController = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /dishes routes needed to make the tests pass

dishesRouter
  .route("/:dishId")
  .get(dishesController.read)
  .put(dishesController.update)
  .all(methodNotAllowed);

dishesRouter
  .route("/")
  .get(dishesController.list)
  .post(dishesController.create)
  .all(methodNotAllowed);

module.exports = dishesRouter;
