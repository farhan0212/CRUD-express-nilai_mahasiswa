const DosenService = require("../services/dosenService");

class DosenController {
  async register(req, res) {
    const { username, password, name, email } = req.body;
    try {
      const user = await DosenService.register(username, password, name, email);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    try {
      const { token } = await DosenService.login(username, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async searchUser(req, res) {
    const getUser = req.params;
    try {
      const user = await DosenService.getUser(getUser);
      res.status(200).json({ user });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new DosenController();
