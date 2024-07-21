const DosenRepository = require("..//repository/dosenRepository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class DosenService {
  async register(username, password, name, email) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return DosenRepository.createUser({
      username,
      password: hashedPassword,
      name,
      email,
    });
  }

  async login(username, password) {
    const user = await DosenRepository.findUserByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { token };
  }
}

module.exports = new DosenService();
