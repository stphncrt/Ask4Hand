import jwt from "jsonwebtoken";

export const generateJwt = (workerId) => {
  const jwtMaxAge = 60 * 60;

  return jwt.sign({ id: workerId }, process.env.TOKEN_KEY, {
    expiresIn: jwtMaxAge,
  });
};
