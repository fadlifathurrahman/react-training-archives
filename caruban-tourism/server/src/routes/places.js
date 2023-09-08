import express from "express";
import conn from "../db.js";

const router = express.Router();

// get all places data
router.get("/", async (_req, res) => {
  const places = await conn.query(
    " SELECT a.*, b.category FROM places a, place_category b WHERE b.`id` = a.category_id"
  );
  res.json(places);
});

// get by id
router.get("/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM places WHERE id = ?");
  const place = (await prepare.execute([req.params.id]))[0];
  if (place) {
    res.json(place);
  } else {
    res.status(404);
    res.send("Places not found.");
  }
});

// get additional
router.get("/additional-image/:id", async (req, res) => {
  const prepare = await conn.prepare(
    "SELECT * FROM additional_place_image WHERE id = ?"
  );
  const place = (await prepare.execute([req.params.id]))[0];
  if (place) {
    res.json(place);
  } else {
    res.status(404);
    res.send("Places not found.");
  }
});

// get category
router.get("/category/:id", async (req, res) => {
  const prepare = await conn.prepare(
    " SELECT b.category FROM places a, place_category b WHERE b.`id` = a.category_id AND a.`id` = ?"
  );
  const category = (await prepare.execute([req.params.id]))[0];
  if (category) {
    res.json(category);
  } else {
    res.status(404);
    res.send("Category not found.");
  }
});

export default router;
