import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import { authRouter } from "./routes/auth.route.js"
import { todoRouter } from "./routes/todo.route.js"

const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to do list</h1>")
})

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"})) // parses incoming requests with Content-Type: application/x-www-form-urlencoded
app.use(express.static("public"))
app.use(cookieParser())
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use("/api/v1/user",authRouter)
app.use("/api/v1/todo",todoRouter)

//http://localhost:3000/api/v1/user;
//http://localhost:3000/api/v1/todo;

export {app}

