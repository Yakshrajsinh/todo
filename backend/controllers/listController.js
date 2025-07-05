const List = require("../models/listModel")
const User = require("../models/userModel")

exports.AddList = async (req, res) => {

    try {
        const { title, body, id } = req.body
        const existUser = await User.findById(id)
        if (existUser) {
            const list = new List({ title, body, user: existUser })
            await list.save()
            existUser.list.push(list)
            existUser.save().then(() => {
                res.status(200).json({ list })
            })
        }
    } catch (error) {
        console.log('error: ', error);
        res.status(400).json({ error })
    }
}


exports.UpdateList = async (req, res) => {
    
    try {
            const { title, body } = req.body
            const list = await List.findByIdAndUpdate(req.params.id, { title, body })
            list.save().then(() => {
                res.status(200).json("task updated")
            })
        } catch (error) {
            console.log('error: ', error);
            res.status(400).json({ error })
        }
    }


exports.deleteTask = async (req, res) => {
    try {
      


        const {id}= req.body
        const existUser = await User.findByIdAndUpdate(
            id,
            {$pull:{list:req.params.id}}
        );
        if(existUser){
            await List.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.status(200).json({message:"task deleted"})
            })
        }
    } catch (error) {
        console.log('error: ', error);
        res.status(400).json({ error });
    }
};



exports.getTask=async(req,res)=>{
   try {
     const list =await List.find({user:req.params.id}).sort({createdAt:-1})
     if(list.length!==0){
     res.status(200).json({list:list})
     }else{
         res.status(200).json({message:"no tasks"})
     }
   } catch (error) {
    console.log('error: ', error);
    res.status(400).json(error)
   }
} 