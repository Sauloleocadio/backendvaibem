const Establishment = require("../models/Establishment");

class EstablishmentController {
  async index(req, res) {
    const establishment = await Establishment.find();
    return res.json(establishment);
  }

  async store(req, res) {
    const { description, place, hour, telephone } = req.body;

    if (!description || !place || !hour || !telephone) {
      return res.sendStatus(400);
    }

    const establishment = await Establishment.create({
      description,
      place,
      hour,
      telephone,
    });

    return res.json(establishment);
  }

  async update(req, res) {
    const { id } = req.params;

    const { description, place, hour, telephone } = req.body;

    if (!description || !place || !hour || !telephone) {
      return res.sendStatus(400);
    }

    const establishment = await Establishment.findByIdAndUpdate(
      { _id: id },
      { description, place, hour, telephone },
      { new: true }
    );

    return res.json(establishment);
  }

  async destroy(req, res) {
    const { id } = req.body;

    await Establishment.findByIdAndDelete({ _id: id });
    return res.json({ message: "Estabelecimento deletado com sucesso!" });
  }
}

module.exports = new EstablishmentController();
