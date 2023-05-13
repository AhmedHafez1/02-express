const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { name } = req?.body;
  if (name) {
    res.status(200).send(name + ' Logged in successfully');
  } else {
    res.status(401).send('Unauthorized');
  }
});

module.exports = router;
