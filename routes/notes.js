const {
  allNotes,
  getSingleNote,
  updateNote,
  deleteNote,
  createNote,
} = require("../controllers/notes");

const router = require("express").Router();

router.get("/", allNotes);
router.post("/", createNote);

router.get("/:id", getSingleNote);
router.patch("/:id", updateNote);
router.delete("/", deleteNote);

module.exports = router;
