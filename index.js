const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fileupload = require("express-fileupload");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload({ useTempFiles: true }));

const notesRouter = require("./routes/notes");
const studentsRouter = require("./routes/students");
const testpapersRouter = require("./routes/testpapers");
const supervisorsRouter = require("./routes/supervisors");
const subjectsRouter = require("./routes/subjects");
const authRouter = require("./routes/auth");
const multer = require("multer");
// const storage = require()
// const upload = multer({storage})

app.use("/api/auth", authRouter);

app.use("/api/notes", notesRouter);
app.use("/api/students", studentsRouter);
app.use("/api/testpapers", testpapersRouter);
app.use("/api/supervisors", supervisorsRouter);
app.use("/api/subjects", subjectsRouter);
// upload.array("image")
app.listen(process.env.PORT, () => {
  console.log(` running on http://localhost:${process.env.PORT}`);
});
