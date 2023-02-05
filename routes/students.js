const {
  allStudents,
  updateStudent,
  deleteStudent,
  createStudent,
} = require("../controllers/student");

const router = require("express").Router();

router.get("/", allStudents);

router.post("/", createStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
