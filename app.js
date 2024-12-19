const dotenv=require('dotenv')
dotenv.config();
const express=require("express")
const cors=require("cors")
const db=require("./db/db")
const app=express();
const userRoutes=require("./routes/user.routes")
const cookieParser=require("cookie-parser")
db()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use("/users",userRoutes)

module.exports=app;