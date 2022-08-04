const userModel = require('../Models/UserModel')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId


const getAllUsers = async () => {
    try {
        let data = await userModel.find({})
        return data
    }
    catch (err) {
        return err
    }
}

const getUserByName = async (name, password) => {
    try {
        let data = await userModel.findOne({ userName: name }, { password: password })
        return data
    }
    catch (err) {
        return err
    }


}

const createNewUser = (obj) => {
    return new Promise((resolve, reject) => {
        let newUser = new userModel(obj)
        console.log(newUser);
        newUser.save(err => {
            if (err) {
                reject(err)
            }
            else {
                resolve("created 👍")
            }
        })

    })
}

const deleteUserById = async (id) => {
    try {
        const user = await userModel.findByIdAndDelete(id)
        return user
    }
    catch (err) {
        return err
    }

}

const updateUserById = (id, obj) => {
    return new Promise((resolve, reject) => {
        userModel.findByIdAndUpdate({ _id: ObjectId(id) }, obj, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(`${data.userName} updated!!😃`)
            }
        })

    })

}





module.exports = { getAllUsers, createNewUser, getUserByName, deleteUserById, updateUserById }