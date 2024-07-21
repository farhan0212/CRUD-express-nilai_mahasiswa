const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const jsonwebtoken = require("jsonwebtoken");
const mahasiswaRoutes = require("./src/routes/MahasiswaRoutes");
const dosenRoutes = require("./src/routes/DosenRoutes");

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use("/api", mahasiswaRoutes);
app.use("/api", dosenRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
