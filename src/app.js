const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

class App {
  constructor() {
    this.server = express();
    mongoose.connect(
      "mongodb+srv://admin:admin@backendvaibem.fkel2.mongodb.net/backendvaibem?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
