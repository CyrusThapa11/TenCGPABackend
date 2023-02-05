const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "vinsmokecyrus",
  api_key: "662644258186613",
  api_secret: "yzy4DjDlhJYO_U97THlonkH5Y4o",
});

exports.uploads = (file) => {
  // console.log("file", file);
  return new Promise((resolve) => {
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
      // console.log("err", err);
      // console.log("result", result);
      if (err) {
        throw new Error(err.message);
      } else {
        resolve({ url: result.secure_url });
      }
    });
    // cloudinary.uploader.upload(
    //   file,
    //   (result) => {
    //     resolve({ url: result.url, id: result.public_id });
    //   },
    //   {
    //     resource_type: "auto",
    //     folder: folder,
    //   }
    // );
  });
};
