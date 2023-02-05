const router = require("express").Router();
const { db } = require("../dbconn");

router.post("/register", (req, res) => {
  // TODO ENCRYPT AND THEN SAVE
  const { name, email, password, college } = req.body;
  console.log("in register ", name, email, password, college);
  let q =
    "INSERT INTO students (`name`,`email`,`password`,`college`) VALUES (?) ";
  const values = [name, email, password, college];
  db.query(q, [values], (err, data) => {
    console.log("err", err);
    console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
  });

  q = `SELECT * FROM students WHERE email = '${email}'`;
  db.query(q, [], (err, data) => {
    console.log("err", err);
    console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    else return res.json({ error: false, data: data[0] });
  });
  //   return res.json("HOT");
  //   res.send("hoids");
});

router.post("/login", (req, res) => {
  // TODO DENCRYPT AND THEN COMPARE
  const { email, password } = req.body;
  console.log("email, password in login", email, password);
  let q = `SELECT * FROM students WHERE email = '${email}';`;
  // const values = [name, email, password, college];
  db.query(q, [], (err, data) => {
    console.log("err", err);
    console.log("data in login", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    // got the user
    console.log(" /login ", data);
    if (password !== data[0].password) {
      return res
        .status(401)
        .json({ error: true, messaeg: "Incorrect credentials" });
    }

    return res.status(201).json({ data: data[0] });
  });
});

// router.get("/:id", getSingleNote);
// router.patch("/", updateNote);
// router.delete("/", deleteNote);

module.exports = router;
