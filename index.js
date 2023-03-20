import express from "express";
import "./configs/mongoose-config.js";
import userRouter from "./routes/users-router.js";
import multer from "multer";
import { nanoid } from "nanoid";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dnrknkhfv",
  api_key: "815163486519677",
  api_secret: "7XhN6hsh1xX5pJcQvjQB_5kJwPg",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const fileName = nanoid();
    const splittedPath = file.originalname.split(".");
    const fileExtention = splittedPath[splittedPath.length - 1];
    cb(null, `${fileName}.${fileExtention}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("image") || file.mimetype.includes("video")) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

const PORT = 8081;
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.post("/files", upload.single("image"), async (req, res) => {
  const uploadedFile = await cloudinary.v2.uploader.upload(req.file.path);
  res.json(uploadedFile);
});

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
