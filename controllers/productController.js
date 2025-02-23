const Product =require("../schema/productSchema")

const createProduct = async (req,res) =>{
    try{
        const create = new Product(req.body)
        await create.save()
        return res.status(201).json("product created",create)
    }
    catch(error){
        console.log("error in creating new product",error)
    }
}

module.exports=createProduct