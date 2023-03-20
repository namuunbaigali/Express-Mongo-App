const mimeType = file.mimetype;
console.log("mimeType:", mimeType);
let dest = "";
if (mimeType.includes("image")) {
  dest += "/images";
} else if (mimeType.includes("video")) {
  dest += "/videos";
} else if (mimeType.includes("pdf")) {
  dest += "/docs";
} else if (mimeType.includes("audio")) {
  dest += "/audios";
} else {
  dest += "/others";
}



fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },