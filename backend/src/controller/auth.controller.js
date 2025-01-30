import bcrypt from "bcrypt";
import { ApiError } from "../utils/APIError.js";
import { asyncHanlder } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registeredUser = asyncHanlder(async (req, res) => {
    try{
  const { username, email, password, profilePictureUrl } = req.body;
  if ([username, email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All field is required");
  }
  const validUser = await User.findOne({
    $or: [{username}, {email}],
  });
  if (validUser) {
    throw new ApiError(401, "User is already exist");
  } else {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = {
      username,
      email,
      password: hashPassword,
    };
    if (profilePictureUrl) {
      user.profilePictureUrl = profilePictureUrl;
    }
    const newUser = await User.create(user);
    const token = newUser.getJWT();
    const option = {
      secure: true,
      httpOnly: true,
    };
    res.cookies("token", token, option);
    ApiResponse(201, newUser, "User Registered Successfully");
  }}catch(error){
    console.log(error)
    throw new ApiError(500,{message:"Something wen't wrong"})
  }
});

const logInUser = asyncHanlder(async (req, res) => {
  const { username, email, password } = req.body;
  const findUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (!findUser) {
    ApiError(401, "User not found");
  }
  const isvalidPassword = await findUser.validatePassword(password);
  if (!isvalidPassword) {
    throw new ApiError(401, "InValid Credential");
  }
  const token = findUser.getJWT();
  const option = {
    secure: true,
    httpOnly: true,
  };
  res.cookies("token", token, option);
  ApiResponse(200, User, token, "User login successfully");
});

export { registeredUser, logInUser };
