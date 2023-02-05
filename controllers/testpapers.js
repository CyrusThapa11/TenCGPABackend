const { db } = require("../dbconn");
const cloudinary = require("cloudinary");
const { uploads } = require("../routes/cloudinary");

cloudinary.v2.config({
  cloud_name: "vinsmokecyrus",
  api_key: "662644258186613",
  api_secret: "yzy4DjDlhJYO_U97THlonkH5Y4o",
});

module.exports.allTestpaper = (req, res) => {
  const q = "SELECT * FROM testpapers";
  db.query(q, [], (err, data) => {
    console.log("err");
    console.log("data");
    if (err) return res.json(err);
    else return res.json(data);
  });
};

module.exports.createTestpaper = async (req, res) => {
  console.log("req.files", req);
  console.log("req.body", req.body);

  let { sid, subcode, college, title } = req.body;
  const { image } = req.files;
  sid = parseInt(sid);
  subcode = parseInt(subcode);
  console.log("sid, subcode, college", sid, subcode, college);
  const allImages = [];
  for (let file of image) {
    console.log("file", file);
    const data = await uploads(file);
    allImages.push(data.url);
  }
  // TODO SAVE URL TO DATA BASE !
  let links = allImages.join(" ");
  console.log("links", links);
  const q =
    "INSERT INTO testpapers (`sid`, `title`, `subcode`, `college` ,`link`) VALUES (?) ";
  db.query(q, [[sid, title, subcode, college, links]], (err, data) => {
    // console.log("err", err);
    // console.log("data", data);
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports.updateTestpaper = async (req, res) => {
  // console.log("req.files", req);
  // console.log("req.body", req.body);

  let { sid, subcode, college, title } = req.body;
  const { image } = req.files;
  sid = parseInt(sid);
  subcode = parseInt(subcode);
  console.log("sid, subcode, college", sid, subcode, college);
  const allImages = [];
  for (let file of image) {
    console.log("file", file);
    const data = await uploads(file);
    allImages.push(data.url);
  }
  // TODO SAVE URL TO DATA BASE !
  let links = allImages.join(" ");
  console.log("links", links);
  const q =
    "INSERT INTO testpapers (`sid`, `title`, `subcode`, `college` ,`link`) VALUES (?) ";
  db.query(q, [[sid, title, subcode, college, links]], (err, data) => {
    // console.log("err", err);
    // console.log("data", data);
    if (err) return res.json(err);
    return res.json(data);
  });

  // res.json({ success: "Sucessfully createTestpaper" });
};

module.exports.deleteTestpaper = (req, res) => {
  const q = `DELETE FROM testpapers WHERE tid=${parseInt(req.params.id)} `;
  db.query(q, [], (err, data) => {
    // console.log("err ", err);
    // console.log("data", data);
    if (err) return res.json(err);
    else return res.json(data);
  });
  // res.send("sending allTestpaper");
};

module.exports.getSingleTestpaper = (req, res) => {
  // todo
  const q = `SELECT * FROM testpapers WHERE tid=${parseInt(req.params.id)} `;
  db.query(q, [], (err, data) => {
    // console.log("err ", err);
    // console.log("data", data);
    if (err) return res.json(err);
    else return res.json(data);
  });
  // res.send("sending allTestpaper");
};
