const  mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    Name:{
        type : String ,
        require :true ,
        minlength :2
    },
    YearPremiered :{
        type : String
    },
    Genres :[String],
        
    Image :{
        type : String
    }
        
})

const model = mongoose.model('movies' , moviesSchema)
module.exports = model