const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class RoleRepository {
  async createRole(data) {
    await prisma.createRole(data);
  }

  async findRoleByName(name) {
    await prisma.role.findUnique(name);
  }
}

modules.exports = RoleRepository;
