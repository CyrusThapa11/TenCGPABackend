const { db } = require("../dbconn");

module.exports.allNotes = (req, res) => {
  //   const { description, sid, subject, type } = req.body;
  let q = "SELECT COUNT(*) AS COUNT FROM notes";
  let totalrows = 0;
  db.query(q, [], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    console.log("data", data);
    totalrows = data[0].COUNT;
    console.log(totalrows);
  });
  q = "SELECT * FROM notes ";
  //   const values = [description, sid, subject, type];
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
      notes: [...data],
      totalrows,
      error: false,
      message: "Sucessfully allNotes",
    });
  });
  //   res.send("sending notes");
};

// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quisquam debitis ex laborum dolorem consequuntur dolore eaque sint cum, sed enim! Quam inventore animi, quas natus eum culpa cumque et?

module.exports.createNote = (req, res) => {
  let {
    description,
    text,
    sid,
    subject,
    title,
    type,
    shared = null,
  } = req.body;
  console.log(
    "description, sid, subject, type, shared",
    description,
    sid,
    subject,
    type,
    shared
  );
  subject = parseInt(subject);
  const q =
    "INSERT INTO notes (`text`,`description`,`sid`,`subject`,`type`,`title`,`shared`) VALUES (?) ";
  const values = [text, description, sid, subject, type, title, shared];
  db.query(q, [values], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      data: data.data,
      error: false,
      message: "Sucessfully createNote",
    });
  });
  //   res.send("sending allTestpaper");
};

module.exports.deleteNote = (req, res) => {
  const { nid } = req.body;
  console.log("nid", nid);
  const q = "DELETE FROM notes WHERE nid = ? ";
  const values = [nid];
  db.query(q, [values], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully deleteNote",
    });
  });
  //   res.send("sending allTestpaper");
};

module.exports.updateNote = (req, res) => {
  const { id } = req.params;
  let nid = id;
  console.log("nid ", nid);
  const {
    text,
    description,
    sid,
    subject,
    type,
    title,
    shared,
    price = 0,
  } = req.body;
  console.log("text ", text);
  const q =
    "UPDATE notes SET `text`=?,`description`=?,`sid`=?,`subject`=?,`type`=?,`price`=?,`title`=?,`shared`=? WHERE nid =? ";
  const values = [
    text,
    description,
    sid,
    subject,
    type,
    price,
    title,
    shared,
    nid,
  ];
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

  //   res.send("sending allTestpaper");
};
module.exports.getSingleNote = (req, res) => {
  const { id } = req.params;

  const q = `SELECT * FROM notes WHERE nid = ${id} `;
  // const values = [description, sid, subject, type, price, nid];
  db.query(q, [], (err, data) => {
    console.log("err", err);
    // console.log("data", data);
    if (err) return res.status(401).json({ error: true, message: err.message });
    return res.json({
      ...data,
      error: false,
      message: "Sucessfully getSingleNote",
    });
  });

  //   res.send("sending allTestpaper");
};
