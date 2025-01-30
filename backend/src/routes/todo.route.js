import express from "express";
import { addTask, readAllTask, removeTask, updateTask } from "../controller/todo.controller.js";
import { authverify } from "../middleware/auth.middleware.js";


const todoRouter=express.Router();

todoRouter.post("/",authverify,addTask)
todoRouter.get("/",authverify,readAllTask)
todoRouter.put("/:id",authverify,updateTask)
todoRouter.delete(":/id",authverify,removeTask)

export {todoRouter}