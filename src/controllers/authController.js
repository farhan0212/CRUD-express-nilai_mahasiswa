const AuthService = require("../service/authService");

class AuthController {
  async register(req, res) {
    try {
      const user = await AuthService.registerUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const { token } = await AuthService.loginUser(username, password);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();
