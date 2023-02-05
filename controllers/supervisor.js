const { db } = require("../dbconn");

module.exports.allSupervisors = (req, res) => {
  // const { sid, value } = req.body;
  const q = "SELECT * FROM students WHERE `issupervisor`= ? ";
  const values = [1];
  db.query(q, [values], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully updateNote",
    });
  });
  // res.send("sending allSupervisors");
};

// module.exports.createSupervisor = (req, res) => {
//   res.send("sending allStudents");
// };

module.exports.updateSupervisor = (req, res) => {
  const { sid, value } = req.body;
  const q = "UPDATE  students SET `issupervisor`=? WHERE sid =? ";
  const values = [value, parseInt(sid)];
  db.query(q, [...values], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully updateNote",
    });
  });
  // res.send("sending allStudents");
};

module.exports.deleteSupervisor = (req, res) => {
  res.send("sending allStudents");
};
