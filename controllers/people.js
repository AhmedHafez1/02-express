const { people } = require('../data');

const getPeople = (req, res) => {
  res.json({ success: true, data: people });
};

const addPerson = (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(400).json({ success: false, msg: 'Noo Name' });
};

module.exports = { getPeople, addPerson };
