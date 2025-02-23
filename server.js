const express = require("express")
const dotenv = require("dotenv")
const cors= require("cors")
const db= require ("./config/db")
const  router =require("./routes/productRoute")

dotenv.config()
const app = express()
const PORT = process.env.PORT || "5000"


app.use(express.json())
app.use(cors())
db()

app.use('/api', router)

app.listen(PORT,()=>{
    console.log(`server is running on PORT`,PORT)
})
