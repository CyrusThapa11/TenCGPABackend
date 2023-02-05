const {
  allSubjects,
  udpateSubject,
  deleteSubject,
  createSubject,
  getSingleSubject,
} = require("../controllers/subjects");

const router = require("express").Router();

router.get("/", allSubjects);

router.post("/", createSubject);
router.patch("/", udpateSubject);
router.delete("/", deleteSubject);

// router.get("/:id", getSingleSubject);

module.exports = router;
