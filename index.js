import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/users-router.js";

const PORT = 8081;
const app = express();
app.use(express.json());
app.use("/api/users", userRouter);

const MONGO_CONNECTION_STRING =
  "mongodb+srv://namuunbaigali266:ezzAXDE4udeBjHno@nmk11.xrigic2.mongodb.net/Green";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
