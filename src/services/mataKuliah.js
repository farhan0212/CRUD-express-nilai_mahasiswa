const MataKuliahRepository = require("../repository/mataKuliahRepository");

class MataKuliahService {
  async createMataKuliah(data) {
    return MataKuliahRepository.createMataKuliah(data);
  }

  async getMataKuliahById(id) {
    return MataKuliahRepository.getMataKuliahById(id);
  }
}

module.exports = new MataKuliahService();
