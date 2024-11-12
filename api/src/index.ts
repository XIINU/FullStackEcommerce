import express from "express";
import productRoutes from "./routes/products/index";

const app = express();

const port = 3000;

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello worlllllllllld");
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
