import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import spotData from "../data/spotsData.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//express router
const router = express.Router()

//get api endpoint for homepage
router.get("/", (req,res) => {
    res.status(200).json(spotData)
})

//get api endpoint for more detailed page
router.get("/:spotID", (req,res) => {
    res.status(200).sendFile(path.resolve(__dirname, "../../client/spot.html"))
})

export default router