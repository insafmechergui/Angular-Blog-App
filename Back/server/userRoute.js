// const bcrypt = require("bcryptjs");
var express = require('express');
const User = require("../model/user");
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
var app = express.Router()
app.use(cors())
// require('dotenv').config();

//add user (signup)
app.post(('/register'), (req, res) => {
    const newUser = ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    newUser.password = hash
                    User.create(newUser)
                        .then(user => {
                            res.json({
                                status: 'Welcome ' + user.name + ', you are registred successfully!'
                            })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            }
            else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});
//(signin)
app.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY)
                    res.send("User login successfuly " + token)
                }
                else {
                    res.json({ error: "User does not exist" })
                }
            }
            else {
                res.json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
//display all users
app.get(('/allUsers'), (req, res) => {
    User.find()
        .then((user) => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
})
//delete 1 user
app.delete(('/deleteUser/:id'), (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('user deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))

})
//update 1 user
app.post(('/updateUser/:id'), (req, res) => {
    User.findById(req.params.id)

        .then((user) => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err))

        })
        .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = app