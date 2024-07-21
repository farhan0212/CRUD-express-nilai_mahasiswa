const NilaiService = require("../repository/nilaiRepository");

class NilaiController {
  async createNilai() {
    try {
      const nilai = await NilaiService.createNilai(req.body);
      res.status(201).json(nilai);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getNilaiByMahasiswa(req, res) {
    try {
      const nilai = await NilaiService.getNilaiByName(req.params.id);
      res.status(200).json(nilai);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getNilaiByMataKuliah(req, res) {
    try {
      const nilai = await NilaiService.getNilaiByMataKuliah(req.params.id);
      res.status(200).json(nilai);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async getAllNilai(req, res) {
    try {
      const nilai = await NilaiService.getAllNilai(req.params.id);
      res.status(200).json(nilai);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new NilaiController();
