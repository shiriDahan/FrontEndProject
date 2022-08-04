const mongoose = require ("mongoose")

const subcriptionsModel = new  mongoose.Schema
({
    'MovieId': {
        type : mongoose.Schema.Types.ObjectId,
        ref :'movies'
    },
    'MemberId' :{
        type : mongoose.Schema.Types.ObjectId,
        ref :'members'
    },
    Date :{
        type : String
    }
})

const model = mongoose.model('subscriptions' ,subcriptionsModel )
module.exports = model