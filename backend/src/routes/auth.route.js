import express from "express";
import { logInUser, registeredUser } from "../controller/auth.controller.js";

const authRouter=express.Router()

authRouter.post("/signin",registeredUser)
authRouter.post("/login",logInUser)

export {authRouter}
