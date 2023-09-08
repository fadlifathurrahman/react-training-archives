import express from "express";
import cors from "cors";
import planetsRouter from "./routes/planets.js";
import galaxiesRouter from "./routes/galaxies.js";

export const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

// membuat route (langsung)
app.get("/hello", (_req, res) => {
  res.send("Hello Node.js");
});

const router = express.Router();

// membuat route dengan objek Route
app.use("/galaxies", galaxiesRouter);
app.use("/planets", planetsRouter);

app.use("/api", router);

app.listen(3000, () => console.log("Server berhasil dijalankan di port 3000"));
