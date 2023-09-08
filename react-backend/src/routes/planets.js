import express from "express";

const planets = [
  {
    id: 1,
    name: "Mercury",
    diameter: 5000,
    description: "Mercury is the 1st in the solar system.",
  },
  {
    id: 2,
    name: "Venus",
    diameter: 5000,
    description: "Venus is the 2nd in the solar system.",
  },
  {
    id: 3,
    name: "Earth",
    diameter: 5000,
    description: "Earth is the 3rd in the solar system.",
  },
  {
    id: 4,
    name: "Mars",
    diameter: 5000,
    description: "Mars is the 4th in the solar system.",
  },
];

const planetsRouter = express.Router();

// semua
planetsRouter.get("/", (_req, res) => {
  res.json(
    planets.map((p) => {
      return { id: p };
    })
  );
});

// satu berdasarkan id
planetsRouter.get("/:id", (req, res) => {
  const planet = planets.find((p) => p.id == req.params.id);
  if (planet) {
    res.json(planet);
  } else {
    res.status(404);
    res.send("Planet tidak ditemukan");
  }
});

export default planetsRouter;
