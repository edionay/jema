const Days = require('../models/days')

module.exports.getAll = async function() {
    return await Days.find()
}