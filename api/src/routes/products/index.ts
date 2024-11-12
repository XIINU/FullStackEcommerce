import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("the list of products");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("A products");
});

router.post("/", (req, res) => {
  res.send("new products created");
});

export default router;
