const express = require('express'),
    server = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose')
const usersController = require('./controllers/users');
const daysController = require('./controllers/days');



const port = process.env.PORT || 8080;

const url = `mongodb+srv://vstillo:l69nHArDzsh4s2OQ@cluster0-w2p5a.gcp.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongoose running')
});

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.listen(port)

server.get('/', async(req, res) => {


})

server.get('/days', async(req, res) => {
    try {
        const days = await daysController.getAll()
        res.status(200).send(days)
    } catch (error) {
        console.log(error)
    }
})

server.post('/login', async(req, res) => {
    const user = req.body

    try {
        const foundUser = await usersController.login(user)
        if (foundUser) res.status(200).send(foundUser)
        else res.status(401).send()
    } catch (error) {
        res.status(500).send()
    }
})

server.post('/schedule', async(req, res) => {
    const userId = req.body.user._id
    const schedule = req.body.schedule

    try {
        const foundUser = await usersController.login(user)
        if (foundUser) res.status(200).send(foundUser)
        else res.status(401).send()
    } catch (error) {
        res.status(500).send()
    }
})

console.log('Port: ' + port)