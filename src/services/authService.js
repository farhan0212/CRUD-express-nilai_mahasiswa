const UserRepository = require("../repository/userRepository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class AuthService {
  async registerUser(data) {
    return UserRepository.createUser(data);
  }

  async loginUser(username, password) {
    const user = await UserRepository.findUserByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role.name },
      "YOUR_SECRET_KEY",
      { expiresIn: "1h" }
    );
    return { token };
  }
}

module.exports = new AuthService();
