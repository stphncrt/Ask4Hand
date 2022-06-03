import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      msg: "Access denied",
    });
  }
  try {
    jwt.verify(token, process.env.TOKEN_KEY);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};
