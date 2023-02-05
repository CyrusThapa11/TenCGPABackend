const { db } = require("../dbconn");

module.exports.allStudents = (req, res) => {
  let q = "SELECT COUNT(*) AS COUNT FROM students";
  let totalrows = 0;
  db.query(q, [], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    console.log("data", data);
    totalrows = data[0].COUNT;
    console.log(totalrows);
  });
  q = "SELECT * FROM students ";
  // const values = [];
  console.log("getting all notes !");
  console.log("req.limit");
  if (parseInt(req.query.limit)) {
    q = q + `LIMIT ${parseInt(req.query.limit)}`;
    if (parseInt(req.query.page) > 1)
      q =
        q +
        ` OFFSET ${(parseInt(req.query.page) - 1) * parseInt(req.query.limit)}`;
  }

  db.query(q, [], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      students: [...data],
      totalrows,
      error: false,
      message: "Sucessfully createStudent",
    });
  });

  // res.send("sending allStudents");
};
module.exports.createStudent = (req, res) => {
  const { name, email, password, college } = req.body;
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
    return res.json({ error: false, data: data[0] });
  });

  // return res.send("createStudent ");
};
module.exports.updateStudent = (req, res) => {
  const { name, email, password, college } = req.body;
  const { id } = req.params;
  const q =
    "UPDATE students SET `name` = ?, `email` = ?, `password` = ?, `college` = ? WHERE sid = ? ";
  const values = [name, email, password, college, id];
  db.query(q, [...values], (err, data) => {
    console.log("err", err);
    console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully updateStudent",
    });
  });
  // res.send("updateStudent");
};
module.exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM students WHERE sid = ? ";
  const values = [id];
  db.query(q, [values], (err, data) => {
    console.log("err", err);
    console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({ ...data, error: false, message: "Sucessfully deleted" });
  });

  // res.send("deleteStudent");
};
