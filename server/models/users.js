const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    passcode: { type: Number, require: true },
    upToVote: { type: Boolean, default: true }
})

module.exports = mongoose.model('Users', usersSchema)