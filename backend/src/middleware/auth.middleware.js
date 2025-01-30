import { User } from "../models/user.model.js";
import { ApiError } from "../utils/APIError.js";
import { asyncHanlder } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const authverify = asyncHanlder(async (req, res, next) => {
  try {
    const token =
      req.cookie.token || req.header("authorization")?.replace("Bearer", "");
    if (!token) {
      throw new ApiError(401, { error: "Unauthorized Access" });
    }
    const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    const { userId } = decode;
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(401, { error: "Invalid access token" });
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(500, "Something wen't wrong");
  }
});

export { authverify };
