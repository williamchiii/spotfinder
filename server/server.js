import express from "express"
import router from "./routes/spotsRoute.js"
import "./config/dotenv.js"

console.log(process.env.PORT)

const app = express()

//middleware
app.use("/scripts", express.static("/scripts"))

app.use("/spots", router)

app.get("/", (req,res)=> {
    res.status(200).send("<h1> API </h1>")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`API started on Port: ${PORT}`)
})