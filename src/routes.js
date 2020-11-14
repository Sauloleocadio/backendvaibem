const { Router } = require("express");

const EstablishmentController = require("./controllers/EstablishmentController");
const EstablishmentFilterPlaceController = require("./controllers/EstablishmentFilterPlaceController");

const routes = new Router();

routes.post("/establishment", EstablishmentController.store);
routes.get("/establishment", EstablishmentController.index);
routes.put("/establishment/:id", EstablishmentController.update);
routes.delete("/establishment", EstablishmentController.destroy);

routes.get(
  "/establishmentfilterplace",
  EstablishmentFilterPlaceController.index
);

module.exports = routes;
