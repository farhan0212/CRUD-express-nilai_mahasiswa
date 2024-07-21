const express = require("express");
const router = express.Router();
const NilaiController = require("../controller/nilaiController");
const { authenticate, authorize } = require("../middleware/authMiddleware");

// Dosen only routes
router.post(
  "/nilai",
  authenticate,
  authorize(["dosen"]),
  NilaiController.createNilai
);
router.get(
  "/nilai/mahasiswa/:mahasiswaId",
  authenticate,
  authorize(["dosen", "mahasiswa"]),
  NilaiController.getNilaiByMahasiswaId
);

module.exports = router;
