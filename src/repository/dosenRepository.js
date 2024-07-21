const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class DosenRepository {
  async findUserByUsername(username) {
    return prisma.dosen.findUnique({ where: username });
  }

  async createUser(data) {
    return prisma.dosen.create({ data });
  }
}

module.exports = new DosenRepository();
