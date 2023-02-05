const { db } = require("../dbconn");

module.exports.allSubjects = (req, res) => {
  // const { subcode, title } = req.body;
  const q = "SELECT * FROM subjects ";
  //   const values = [subcode, title];
  db.query(q, [], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully allSubjects",
    });
  });
  //   res.send("sending allTestpaper");
};

module.exports.createSubject = (req, res) => {
  const { subcode, title } = req.body;
  const q = "INSERT INTO subjects (`subcode`,`title`) VALUES (?) ";
  const values = [subcode, title];
  db.query(q, [values], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully createStudent",
    });
  });

  //   res.send("sending allTestpaper");
};
module.exports.udpateSubject = (req, res) => {
  const { subcode, title, subid } = req.body;
  const q = "UPDATE subjects SET `subcode`=?,`title`=? WHERE `subid`=? ";
  const values = [subcode, title, subid];
  db.query(q, [...values], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully createStudent",
    });
  });
  //   res.send("sending udpateSubject");
};

module.exports.deleteSubject = (req, res) => {
  const { subid } = req.body;
  const q = "DELETE from subjects WHERE `subid`=? ";
  const values = [subid];
  db.query(q, [values], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully deleteSubject",
    });
  });
  //   res.send("sending allTestpaper");
};

module.exports.getSingleSubject = (req, res) => {
  //   res.send("sending allTestpaper");
};
