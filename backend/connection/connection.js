const mongoose=require('mongoose')

const connection =async(req,res)=>{
 try {
       mongoose.connect('mongodb+srv://Yakshrajsinh:Yakshrajsinh@crud.qu43a.mongodb.net/Todo-list')
   .then(()=>{
       console.log("db connected👻");  
   }).catch((err)=>{
       console.log('err: ', err);
   })
 } catch (error) {
    res.status(400).json({message:"data base not connected"})
}
}
connection()