const { default: mongoose, model } = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    list: [{
        type: mongoose.Types.ObjectId,
        ref: "listSchema"
    }]
},
    {
        timestamps: true
    })
const User = model("user",userSchema)
module.exports=User