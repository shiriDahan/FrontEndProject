const mongoose = require ('mongoose')

const membersModel = new mongoose.Schema({
    MemberName: {
        type : String,
        require:true
    },
    Email : {
        type : String,
        require : true,
        minlength : 10
    },
    City :{
        type : String
    }
})

const model = mongoose.model('members' , membersModel)

module.exports = model

