const express = require("express");
const router = express.Router();

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;

  res.json();
});



module.exports = router;