const express=require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app =express();
const stripe=require('stripe')(process.env.STRPE_SECRET_KEY);
const servicesRoute=require("./routes/services.route")

const dbConnect = require('./utils/dbConnect');
const port=process.env.PORT || 5000;



//middleware
app.use(cors());
app.use(express.json());




 
dbConnect()

async function run(){
try{
 
  

  app.use('/tools',servicesRoute);

  
  
  
//    //.......................................................................................
//    app.get('/service',async(req,res)=>{      
//     const query ={};
//     const cursor=serviceCollection.find(query);
//     const product=await cursor.toArray();
//     res.send(product);

//    })









}

finally{

}


}run().catch(console.dir);




app.get('/',(req,res)=>{
  res.send('running server ')
});


app.listen(port,()=>{

console.log("I AM FIRST OPERATION MOZAHID",port)

})