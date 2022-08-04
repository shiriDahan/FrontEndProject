const mongoose = require('mongoose')
const membersModel = require('../Models/MembersModel')
const SubscriptionsBl = require('./SubscriptionsBl')
const ObjectId = mongoose.Types.ObjectId


const getAllMembers = async () => {
    try {
        let members = await membersModel.find({})
        return members
    }
    catch (err) {
        return err
    }
}

const getMemberById = async (id) => {
    try {
        let member = await membersModel.findById(id)
        return member
    }
    catch (err) {
        return err
    }

}
const getMemberByName = async (member) => {
    try {
        let tmember = await membersModel.findOne({ MemberName: member })
        return tmember
    }
    catch (err) {
        return err
    }
}

const createNewMember = (obj) => {
    console.log(obj);
    return new Promise((resolve, reject) => {
        let newMember = new membersModel(obj)
        console.log(newMember);
        newMember.save(err => {
            if (err) {
                reject(err)
            }
            else {
                resolve("created 👍")
            }
        })

    })
}

const deleteMemberById = (id) => {
    return new Promise((resolve, reject) => {
        membersModel.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                SubscriptionsBl.deleteSubscriptionsByMemberId(id)
                resolve('deleted 👍')
            }
        })
    })
}


const updateMemberById = (id, obj) => {
    return new Promise((resolve, reject) => {
        membersModel.findByIdAndUpdate({ _id: ObjectId(id) }, obj, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve("updated")
            }
        })

    })

}


module.exports = { getAllMembers, getMemberByName, createNewMember, deleteMemberById, updateMemberById, getMemberById }