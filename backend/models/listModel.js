const { default: mongoose, model } = require("mongoose")

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: [{
        type: mongoose.Types.ObjectId,
        ref: "userSchema"
    }]
},
    {
        timestamps: true
    })
const List=model("list",listSchema)
module.exports=List