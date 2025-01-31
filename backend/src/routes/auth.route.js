import express from "express";
import { logInUser, logoutUser, registeredUser } from "../controller/auth.controller.js";

const authRouter=express.Router()

authRouter.post("/signup",registeredUser)
authRouter.post("/login",logInUser)
authRouter.post("/logout",logoutUser)

export {authRouter}
