const express = require("express");
const router = express.Router();
const RoleController = require("../controller/roleController");

router.post("/role", RoleController.createRole);

module.exports = router;
