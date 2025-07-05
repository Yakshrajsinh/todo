const User = require("../models/userModel")
const bcrypt=require("bcryptjs")

exports.SignUp = async (req, res) => {
    try {
        const { email, username, password } = req.body
        const hashpassword=bcrypt.hashSync(password)
        const user = new User({ email, username, password:hashpassword })

        const existEmail = await User.findOne({ email })
        if (existEmail) {
            console.log("email already exists")
            res.status(200).json({message:"email already exists"})
        } else {

            await user.save().then(() => {
                res.status(200).json({ message:"sign up successfull" })
            })
        }

    } catch (error) {
        console.log('error: ', error);
        res.status(200).json({ message:"user already exists" })
    }
}

exports.LogIn=async(req,res)=>{
    try {
       const user = await User.findOne({email:req.body.email})

       if(!user){
        return res.status(200).json({message:"user not found"})
       }

       const matchpass= await bcrypt.compareSync(req.body.password,user.password)
       if(!matchpass){
        return res.status(200).json({message:"your password is incorrect"})
       }
       const {password,...others}=user._doc
       res.status(200).json(others)
    } catch (error) {
        console.log('error: ', error);
        res.status(200).json( error )
    }
}