const logger = (req, res, next) => {
  console.log(req.url, req.method, new Date().toLocaleString());
  next();
};

module.exports = logger;
