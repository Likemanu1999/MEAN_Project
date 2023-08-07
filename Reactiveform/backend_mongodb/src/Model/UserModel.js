const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { 
        type: Schema.Types.ObjectId,
         auto: true 
    },
    firstname : {
        type : String,
        require : true,
        trim : true
    },
    lastname : {
        type : String,
        require : true,
        trim : true
    },
    street : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase : true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    picture: {
        type: String,
        required: false,
    },
    average: {
        type : String,
        required: false,    
    },
    isDeleted: {
        type: Boolean,
        default: false
    },  
},{ timestamps : false })


module.exports = mongoose.model('Userform',userSchema)