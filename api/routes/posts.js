import { Express } from "express";

const router = express.router()

router.get("/", (req, res)=>{
    res.json("post")
})

export default router