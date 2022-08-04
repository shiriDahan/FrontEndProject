const mongoose = require('mongoose')
const subscriptionModel = require("../Models/SubscriptionsModel")
const ObjectId = mongoose.Types.ObjectId

const getAllSubsriptions = async () => {
    try {
        let subscriptions = await subscriptionModel.find({})
        return subscriptions
    }
    catch (err) {
        return err
    }
}

const getSubscriptionsByMovieId = (movieId) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({ "MovieId": movieId }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })

    })

}

const getSubscriptionsByMemberId = (memberId) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({ MemberId: ObjectId(memberId) }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })

    })

}

const createNewSubscription = (obj) => {
    return new Promise((resolve, reject) => {
        let newSubscription = new subscriptionModel(obj)
        console.log(newSubscription);
        newSubscription.save(err => {
            if (err) {
                reject(err)
            }
            else {
                resolve("created 👍")
            }
        })

    })
}

const deleteSubscriptionsByMovieId = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.deleteMany({ "MovieId": id }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("deleted")
            }
        })

    })
}

const deleteSubscriptionsByMemberId = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.deleteMany({ "MemberId": id }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("deleted")
            }
        })

    })
}

const updateSubscriptionById = (id, obj) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.findByIdAndUpdate({ _id: ObjectId(id) }, obj, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve("updated")
            }
        })

    })

}


module.exports = { getAllSubsriptions, getSubscriptionsByMemberId, getSubscriptionsByMovieId, createNewSubscription, deleteSubscriptionsByMovieId, deleteSubscriptionsByMemberId, updateSubscriptionById }