const express=require('express');
const cors = require('cors');
require('dotenv').config();
const app =express();
const servicesRoute=require("./routes/services.route")
const { connectToServer } = require('./utils/dbConnect');
const port=process.env.PORT || 5000;



//middleware
app.use(cors());
app.use(express.json());




 
connectToServer((err)=>{

  if(!err){
  app.listen(port, () => {
  console.log(`listening ${port}`);
  })}
  else{
      console.log(err);
  }
})


app.use('/tools',servicesRoute);

async function run(){
try{
 
  



}

finally{

}


}run().catch(console.dir);




app.get('/',(req,res)=>{
  res.send('running server ')
});

