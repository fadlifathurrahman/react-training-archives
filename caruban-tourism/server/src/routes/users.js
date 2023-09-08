import conn from "../db.js";
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// login comparing
router.post("/login", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
  const user = (await prepare.execute([req.body.email]))[0];
  if (user) {
    const result = await bcrypt.compare(req.body.password, user.password);
    if (result === true) {
      res.json({
        token: jwt.sign(user, process.env.SECRET_KEY),
        user,
      });
    } else {
      res.status(401).send("Invalid email or password.");
    }
  } else {
    res.status(401).send("Invalid email or password.");
  }
});

// register
router.post("/register", async (req, res) => {
  // check duplicate email
  const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
  const email = (await prepare.execute([req.body.email]))[0];
  if (email) {
    // if email was using
    res.status(401).send("Email was using");
  } else {
    // if email available for use
    // check duplicate username
    const prepare = await conn.prepare(
      "SELECT * FROM users WHERE username = ?"
    );
    const username = (await prepare.execute([req.body.username]))[0];
    if (username) {
      // if username was using
      res.status(401).send("Username was using");
    } else {
      // if username and email available for use
      try {
        // hashing passwaord before insert to database
        const hash = await bcrypt.hash(req.body.password, 10);
        // preparing query for user account
        const prepare = await conn.prepare(
          "INSERT INTO users (email, password, name, username, phone) VALUES (?, ?, ?, ?, ?)"
        );
        // execute user`s data to database
        await prepare.execute([
          req.body.email,
          hash,
          req.body.name,
          req.body.username,
          req.body.phone,
        ]);
        res.send("Your account is successfully created.");
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }
});

export default router;
