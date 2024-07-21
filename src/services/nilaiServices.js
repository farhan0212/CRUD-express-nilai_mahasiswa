const NilaiRepository = require("./repository/nilaiRepository");

class NilaiService {
  async createNilai(data) {
    return NilaiRepository.createNilai(data);
  }

  async getNilaiByMahasiswa(mahasiswaId) {
    return NilaiRepository.getNilaiByName(mahasiswaId);
  }
  async getNilaiByMataKuliah(mataKuliahId) {
    return NilaiRepository.getNilaiByMataKuliah(mataKuliahId);
  }

  async getAllNilai() {
    return NilaiRepository.getAllNilai();
  }
}

modules.export = NilaiService;
