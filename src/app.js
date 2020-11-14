const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

class App {
  constructor() {
    this.server = express();

    //mongodb+srv://admin:<password>@backendvaibem.fkel2.mongodb.net/<dbname>?retryWrites=true&w=majority
    mongoose.connect(
      "mongodb+srv://admin:admin@backendvaibem.fkel2.mongodb.net/backendvaibem?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    this.serversocket = http.Server(this.server);
    this.io = socketIo(this.serversocket);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use((req, res, next) => {
      req.io = this.io;
      return next();
    });
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
