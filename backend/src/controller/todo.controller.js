import { Todo } from "../models/todo.model.js";
import { ApiError } from "../utils/APIError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHanlder } from "../utils/asyncHandler.js";

const addTask = asyncHanlder(async (req, res) => {
  const { content, complete } = req.body;
  const userid = req?.user?._id;
  const createdBy = userid;
  if (content.trim() === "") {
    res.status(400).json({ message: "content field can't be empty" });
  }
  const task = { content, complete, createdBy };
  const newTask = new Todo(task);
  const savedTask = await newTask.save();
  res.status(200).json(
    new ApiResponse(201, {
      message: "new task added successfully",
      user: savedTask,
    })
  );
});

const updateTask = asyncHanlder(async (req, res) => {
  const { id } = req.params;
  const { content, complete } = req.body;
  const user = await Todo.findByIdAndUpdate(
    id,
    {
      $set: {
        content,
        complete,
      },
    },
    { new: true }
  );
  res
    .status(200)
    .json(
      new ApiResponse(200, { message: "task update successfully", data: user })
    );
});

const removeTask = asyncHanlder(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Todo.findByIdAndDelete(id);
    res.status(200).json(
      new ApiResponse(200, {
        message: "task deleted successfully",
        data: user,
      })
    );
  } catch (eror) {
    throw new ApiError(404, { message: "user not found" });
  }
});

const readAllTask = asyncHanlder(async (req, res) => {
  try {
    const userId = req.user.id;
    const allTask = await Todo.find({ createdBy: userId }).populate(
      "createdBy",
      "username email"
    );
    res.status(200).json({ data: allTask });
  } catch (error) {
    throw new ApiError(
      500,
      error.message || { message: "Something wen't wrong" }
    );
  }
});

export { addTask, removeTask, updateTask, readAllTask };
