const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: 'Failed',
      message: 'Unauthorized!',
    });
  }

  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, process.env.AUTH_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      status: 'Failed',
      message: 'Unauthorized!',
    });
  }
}
