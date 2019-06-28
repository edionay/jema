const daysRepository = require('../repositories/days')

module.exports.getAll = async function(credentials) {
    return await daysRepository.getAll()
}