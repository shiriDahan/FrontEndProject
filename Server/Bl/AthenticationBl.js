const userModel = require ('../Models/UserModel')

const LogIn = async (user) => {
    try {
        let data = await userModel.findOne({ "userName": user.userName , "password": user.password })
        return data
    }
    catch (err) {
        return err
    }
}

module.exports = { LogIn }