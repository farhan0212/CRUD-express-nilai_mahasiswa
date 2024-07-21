const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MataKuliahRepository {
  async createMataKuliah(data) {
    await prisma.mataKuliah.create(data);
  }

  async getMataKuliahById(id) {
    return prisma.mataKuliah.findUnique({ where: { id } });
  }
}

module.exports = new MataKuliahRepository();
