const express = require("express");
const router = express.Router();
const MataKuliahController = require("../controller/mataKuliahController");
const { authenticate, authorize } = require("../middleware/authMiddleware");

// Superadmin only routes
router.post(
  "/mata-kuliah",
  authenticate,
  authorize(["superadmin"]),
  MataKuliahController.createMataKuliah
);
router.get(
  "/mata-kuliah",
  authenticate,
  authorize(["superadmin", "dosen", "mahasiswa"]),
  MataKuliahController.getAllMataKuliah
);
router.get(
  "/mata-kuliah/:id",
  authenticate,
  authorize(["superadmin", "dosen", "mahasiswa"]),
  MataKuliahController.getMataKuliahById
);

module.exports = router;
