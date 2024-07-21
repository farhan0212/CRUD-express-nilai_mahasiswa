const dosenService = require("../services/dosenService");

class DosenConroller {
  async register(req, res) {
    const { username, password, name, email } = req.body;
    try {
      const user = await dosenService.register(username, password, name, email);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    try {
      const { token } = await dosenService.login(username, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new DosenConroller();
