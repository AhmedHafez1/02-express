const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, data: people });
});

router.post('/', (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(400).json({ success: false, msg: 'Noo Name' });
});

module.exports = router;
