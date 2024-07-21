const MataKuliahService = require("../services/mataKuliah");

class MataKuliahController {
  async createMataKuliah(req, res) {
    try {
      const mataKuliah = await MataKuliahService.createMataKuliah(req.body);
      res.status(200).json(mataKuliah);
    } catch (error) {
      res.status(400).error(error.message);
    }
  }
}

module.exports = new MataKuliahController();
