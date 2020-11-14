const Establishment = require("../models/Establishment");

class EstablishmentFilterPlaceController {
  async index(req, res) {
    const { place } = req.query;

    const establishment = await Establishment.find({ place });
    return res.json(establishment);
  }
}

module.exports = new EstablishmentFilterPlaceController();
