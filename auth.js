const auth = function (req, res, next) {
  const name = req.query.name;

  if (name === 'Mariam' || name === 'Omar' || name === 'Yosuf') {
    req.user = { name, religion: 'Muslim' };
    next();
  } else {
    res.send('Unauthorized');
  }
};

module.exports = auth;
