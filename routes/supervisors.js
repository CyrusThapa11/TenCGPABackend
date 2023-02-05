const {
  allSupervisors,
  updateSupervisor,
} = require("../controllers/supervisor");

const router = require("express").Router();

router.get("/", allSupervisors);
router.patch("/", updateSupervisor);

module.exports = router;
