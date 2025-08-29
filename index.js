import express from "express";
import mongoose from "mongoose";
const app = express();
import Movie from "./models/Movies.js";
import movieRoutes from "./routes/movieRoutes.js";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", movieRoutes);

mongoose.connect("");

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});
