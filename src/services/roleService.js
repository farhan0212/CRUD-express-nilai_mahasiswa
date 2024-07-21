const roleRepository = require("../repository/roleRepository");

class RoleService {
  async findRoleByName(name) {
    return roleRepository.findRoleByName(name);
  }
  async createRole(data) {
    return roleRepository.createRole({ data });
  }
}

module.exports = new RoleService();
