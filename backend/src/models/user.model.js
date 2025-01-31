import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    profilePictureUrl: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg",
    },
  },
  { timestamp: true }
);

userSchema.methods.validatePassword = async function (passwordByUser) {
  const user = this;
  const isValidPassword = await bcrypt.compare(passwordByUser, user.password);
  return isValidPassword;
};

userSchema.methods.getJWT = function () {
  const user = this;
  const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

export const User = mongoose.model("User", userSchema);