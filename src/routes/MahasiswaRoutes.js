const express = require("express");
const router = express.Router();
const MahasiswaController = require("../controllers/mahasiswaController");

router.post("/mahasiswa/register", MahasiswaController.register);
router.post("/mahasiswa/login", MahasiswaController.login);

module.exports = router;
