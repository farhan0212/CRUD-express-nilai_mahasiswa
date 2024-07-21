const express = require("express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");
const mahasiswaRoutes = require("./src/routes/MahasiswaRoutes");
const dosenRoutes = require("./src/routes/DosenRoutes");
const authRoutes = require("./src/routes/AuthRoutes"); // Tambahkan rute autentikasi
const { authenticate, authorize } = require("./src/middleware/authRole"); // Middleware autentikasi dan otorisasi

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rute autentikasi (tidak memerlukan autentikasi)
app.use("/api/auth", authRoutes);

// Rute mahasiswa dan dosen memerlukan autentikasi
app.use("/api/mahasiswa", authenticate, mahasiswaRoutes);
app.use(
  "/api/dosen",
  authenticate,
  authorize(["dosen", "superadmin"]),
  dosenRoutes
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
