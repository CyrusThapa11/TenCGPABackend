const {
  allTestpaper,
  createTestpaper,
  getSingleTestpaper,
  deleteTestpaper,
  updateTestpaper,
} = require("../controllers/testpapers");
const router = require("express").Router();

router.get("/", allTestpaper);
router.post("/", createTestpaper);
router.patch("/", updateTestpaper);
router.get("/:id", getSingleTestpaper);
router.delete("/:id", deleteTestpaper);

module.exports = router;
