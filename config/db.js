const mongoose = require("mongoose")

const db = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to db successfully")
    } 
    catch(error){
        console.log("error in connecting to db",error)
    }
}
module.exports = db