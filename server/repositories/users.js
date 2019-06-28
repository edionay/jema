const Users = require('./../models/users')

module.exports.getOne = async function(user) {
    return await Users.findOne({ email: user.email, passcode: user.passcode })
}