const userModel = require('../Model/UserModel')
const uploadFile = require("../AWS_S3/aws_s3")
const validator = require("../validator/validator")

const createUser = async (req, res) => {
    try {
        let requestBody = req.body
        if (!validator.isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide user details' }) 
        }
        if (!validator.isValidField(requestBody.mobile)) {
            return res.status(400).send({ status: false, message: 'phone number is required' }) 
        }
        if (!validator.isValidMobile(requestBody.mobile)) {
            return res.status(400).send({ status: false, message: `${requestBody.mobile} is not valid` })
        }
        if (!validator.isValidField(requestBody.email)) {
            return res.status(400).send({ status: false, message: 'email is required' })
            
        }
        if (!(validator.isValidEmail(requestBody.email.trim()))) {  
            return res.status(400).send({ status: false, message: `${requestBody.email} is not valid email` })
        }
        // let files = req.files
        // if(files && files.length>0){           
        //     let uploadedFileURL= await uploadFile( files[0] )
        //     requestBody.picture = uploadedFileURL
        // }
        const file = req.file;
    if (file) {
      const uploadedFileURL = await uploadFile(file);      
      requestBody.picture = uploadedFileURL;
    }
        let userSaved = await userModel.create(requestBody)
        res.status(201).send({ status: true, message: "user successfully created", data: userSaved });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

const getdata = async function (req, res) {
    try {       
        let result = await userModel.find({isDeleted: false})           
        return res.status(200).send({ status: true, data: result})
    }
    catch (error) {
        return res.status(500).send({ status: true, message: error.message })
    }
}
const getUserById = async function (req, res) {
    try {
    let userId = req.params.userId;   
    let user = await userModel.findOne({_id : userId, isDeleted : false})     
     return res.status(200).send({ status: true, message:"user list" , data: user})
    }
    catch (error){
        return res.status(500).send({status: true, message: error.message})
    }
}
const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId
        let requestBody = req.body      
        if (!userId) {
            return res.send({ message: "userId  is not present" })
        }
        if (!validator.isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: "invalid request" })
        }          
        const updateuser = await userModel.findByIdAndUpdate({ _id: userId, isDeleted: false }, { $set: { ...requestBody } }, { new: true })
        return res.status(200).send({ status: true, message: "book updated", data: updateuser })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, message: error.message });
    }
}

const deleteUser = async function (req, res) {
    try {
        let userId = req.params.userId        
        let userDetails = await userModel.findById(userId)       
        // isDeleted updation
        if (userDetails.isDeleted == false) {
            let deleted = await userModel.findByIdAndUpdate(userId, { $set: { isDeleted: true, deletedAt: new Date() } }, { new: true })
            return res.status(200).send({ status: true, message: "deleted successfully" })
        } else {
            return res.status(404).send({ status: false, message: "the user is already deleted" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = { createUser, getdata ,getUserById, updateUser , deleteUser}