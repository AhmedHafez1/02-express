const login = (req, res) => {
  const { name } = req?.body;
  if (name) {
    res.status(200).send(name + ' Logged in successfully');
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = { login };
