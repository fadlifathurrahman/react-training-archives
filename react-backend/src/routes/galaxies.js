import express from "express";

const galaxies = [
  {
    id: 1,
    name: "Andromeda",
    diameter: 5000000,
  },
  {
    id: 2,
    name: "Milky Way",
    diameter: 4000000,
  },
  {
    id: 1,
    name: "triangulum",
    diameter: 3000000,
  },
];

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(galaxies);
});

router.get("/:id", (req, res) => {
  galaxies.find((g) => g.id == req.params.id);
  if (galaxies) {
    res.json(galaxies);
  } else {
    res.status(404);
    res.send("Galaksi tidak ditemukan");
  }
});

export default router;
