// import dotenv for database
import "dotenv/config";
// import express dan cors
import express from "express";
import cors from "cors";
// import auth
import authMiddleware from "./middlewares/auth.js";
import authRouter from "./routes/auth.js";
// import components
import placesRouter from "./routes/places.js";
import dishesRouter from "./routes/dishes.js";
import users from "./routes/users.js";

// mengexport function express
export const app = express();

// using cors
app.use(cors({ origin: "http://localhost:5173" })); // menggunakan cors
app.use(express.json()); // membaca body

const router = express.Router();
app.use("/api", router);
router.use("/auth", authRouter);
router.use("/places", placesRouter);
router.use("/dishes", dishesRouter);
router.use("/users", users);

// using middleware
router.use(authMiddleware);
router.use("/auth/edit", authRouter);
router.use("/auth/booking", authRouter);

const port = 3000;
app.listen(port, () => console.log(`Running in http://localhost:${port}`));
