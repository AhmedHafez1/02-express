const express = require('express');
const { getPeople, addPerson } = require('../controllers/people');
const router = express.Router();

router.get('/', getPeople);

router.post('/', addPerson);

module.exports = router;
