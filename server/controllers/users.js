const usersRepository = require('./../repositories/users')

module.exports.login = async function(credentials) {
    return await usersRepository.getOne(credentials)
}