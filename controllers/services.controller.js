const { getDb } = require("../utils/dbConnect");

module.exports.getAllServices = async (req, res,next) => {
    try{
        const db=getDb();
        const result= await db.collection("datamozahid").find().toArray();
       res.status(200).json({success:true , data: result})
    }catch (error){
    next(error);
    }  

}

module.exports.saveServices = async (req, res, next) => {

    try {
        const db = getDb()
        const data = req.body;
        const result = await db.collection("datamozahid").insertOne(data);
        console.log(result)


    } catch (error) {
        next(error)


    }

}