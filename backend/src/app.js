import cookieParser from "cookie-parser"
import express from "express"

const app=express()

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"})) // parses incoming requests with Content-Type: application/x-www-form-urlencoded
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/v1/users",)

export {app}

