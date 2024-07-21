const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class MahasiswaRepository {
  async findUserByUsername(username) {
    return prisma.mahasiswa.findUnique({ where: username });
  }

  async createUser(data) {
    return prisma.mahasiswa.create({ data });
  }
}

module.exports = new MahasiswaRepository();
