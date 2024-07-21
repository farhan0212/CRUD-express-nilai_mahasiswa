const roleService = require("../services/roleService");

class RoleController {
  async createRole(req, res) {
    try {
      const role = await roleService.createRole(req.body);
      res.status(200).json(role);
    } catch (error) {
      res.status(400).error(error.message);
    }
  }
}
modules.exports = new RoleController();
