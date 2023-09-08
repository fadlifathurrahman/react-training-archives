import express from "express";
import conn from "../db.js";
import bcrypt from "bcrypt";
import authMiddleware from "../middlewares/auth.js";

// membuat route (dengan objek Router)
const router = express.Router();

router.use(authMiddleware);

// router akses akun
router.get("/me", (req, res) => {
  res.json(req.user);
});

// update email
router.put("/edit-email/:id", async (req, res) => {
  // check duplicate email
  const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
  const email = (await prepare.execute([req.body.email]))[0];
  if (email) {
    // if email was using
    res.status(401).send("Email was using");
  } else {
    // if new email is available for use
    try {
      // update email query
      const prepare = await conn.prepare(
        "UPDATE users SET email = ? WHERE id = ?"
      );
      // execute update email query to database
      await prepare.execute([req.body.email, req.params.id]);
      res.status(200).send("Your email updated");
    } catch (error) {
      res.status(500).send(error);
    }
  }
});

// update password
router.put("/edit-password/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM users WHERE email = ?");
  const user = (await prepare.execute([req.body.email]))[0];
  const result = await bcrypt.compare(req.body.previousPassword, user.password);
  if (result === true) {
    try {
      // hashing password before update database
      const hash = await bcrypt.hash(req.body.newPassword, 10);
      // update password query
      const prepare = await conn.prepare(
        "UPDATE users SET password = ? WHERE id = ?"
      );
      // execute update password query to database
      await prepare.execute([hash, req.params.id]);
      res.status(200).send("Your password updated");
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(401).send("Password didn`t match.");
  }
});

// update username
router.put("/edit-username/:id", async (req, res) => {
  // check duplicate email
  const prepare = await conn.prepare("SELECT * FROM users WHERE username = ?");
  const username = (await prepare.execute([req.body.username]))[0];
  if (username) {
    // if username was using
    res.status(401).send("Username was using");
  } else {
    // if new email is available for use
    try {
      // update email query
      const prepare = await conn.prepare(
        "UPDATE users SET username = ? WHERE id = ?"
      );
      // execute update email query to database
      await prepare.execute([req.body.username, req.params.id]);
      res.status(200).send("Your username updated");
    } catch (error) {
      res.status(500).send(error);
    }
  }
});

// update name
router.put("/edit-name/:id", async (req, res) => {
  try {
    // update name query
    const prepare = await conn.prepare(
      "UPDATE users SET name = ? WHERE id = ?"
    );
    // execute update name query to database
    await prepare.execute([req.body.name, req.params.id]);
    res.status(200).send("Your name updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

// update phone
router.put("/edit-phone/:id", async (req, res) => {
  try {
    // update name query
    const prepare = await conn.prepare(
      "UPDATE users SET phone = ? WHERE id = ?"
    );
    // execute update phone query to database
    await prepare.execute([req.body.phone, req.params.id]);
    res.status(200).send("Your phone updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete account
router.put("/delete-account/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM users WHERE id = ?");
  const user = (await prepare.execute([req.params.id]))[0];
  if (user) {
    const result = await bcrypt.compare(
      req.body.confirmPassword,
      user.password
    );
    if (result) {
      try {
        const prepare = await conn.prepare(
          "UPDATE users SET email = 'none' WHERE id = ?"
        );
        await prepare.execute([req.params.id]);
        res.status(200).send("Your account deleted");
      } catch (error) {
        res.status(500).send(error);
      }
    } else {
      res.status(401).send("Password didn`t match.");
    }
  } else {
    res.status(401).send("Password didn`t match.");
  }
});

// booking
router.post("/booking/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "INSERT INTO booking (place_id, user_id, `time`) VALUES (?, ?, ?)"
    );
    // execute user`s data to database
    await prepare.execute([req.body.placeId, req.params.id, req.body.time]);
    res.send("Booking created.");
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
