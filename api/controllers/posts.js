const express = require("express");
const router = express.Router();
const { poolQuery } = require("../helpers");

router.get("/", async(req, res) => {
  try {
    const messages = await poolQuery(
      `SELECT a.id, a.userId, a.message, b.username FROM posts a JOIN users b ON a.userId = b.id`
    );
    res.send(messages);
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
});

router.post("/", async(req, res) => {
  try {
    const result = await poolQuery(`INSERT INTO posts SET ?`, {
      userId: req.body.userId,
      message: req.body.message
    });
    res.send({
      success: true,
      messageId: result.insertId,
      message: req.body.message
    });
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
});

module.exports = router;
