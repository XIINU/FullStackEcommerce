import express, { json } from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello worlllllllllld");
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
