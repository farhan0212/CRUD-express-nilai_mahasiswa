const express = require("express");
const router = express.Router();
const dosenController = require("../controllers/dosenController");

router.post("/dosen/register", dosenController.register);
router.post("/dosen/login", dosenController.login);
router.get("/dosen/:username", dosenController.searchUser);

module.exports = router;
