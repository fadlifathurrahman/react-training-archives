import express from "express";
import conn from "../db.js";

const router = express.Router();

// get all places data
router.get("/", async (_req, res) => {
  const dishes = await conn.query("SELECT * FROM dishes");
  res.json(dishes);
});

// get by id
router.get("/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM dishes WHERE id = ?");
  const dish = (await prepare.execute([req.params.id]))[0];
  if (dish) {
    res.json(dish);
  } else {
    res.status(404);
    res.send("Dish not found.");
  }
});

export default router;
