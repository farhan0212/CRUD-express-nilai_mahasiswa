const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class NilaiRepository {
  async createNilai(nilai) {
    return prisma.nilai.create({ data: nilai });
  }

  async getNilaiByName(name) {
    return prisma.nilai.findMany({ where: { nama_mahasiswa: name } });
  }

  async getAllNilai() {
    return prisma.nilai.findMany({
      include: {
        matakuliah: true,
        mahasiswa: true,
      },
    });
  }
}
modules.export = new NilaiRepository();
