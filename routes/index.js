const router = require("express").Router();

router.use("/api", require("./api/auction"));
router.use("/api", require("./api/user"));

module.exports = router;
