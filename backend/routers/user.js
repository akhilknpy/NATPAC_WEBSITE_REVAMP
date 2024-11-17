const express = require('express')
let userrouter = express.Router()

userrouter.use(express.json())
userrouter.use(express.urlencoded({ extended: true }))

const userData = require('../models/userSchema')

userrouter.post('/login', async (req, res) => {
    const user1 = await userData.findOne({ userName: req.body.username })
    console.log(user1);
    if (user1) {
        if (user1.password === req.body.password) {
            console.log(user1);
            res.status(200).json({ message: 'Login Successful' });
        }
    }
    else {
        return res.json({ message: "Invalid Username" })
    }
})
userrouter.post('/userReg', async (req, res) => {
    var user = req.body;
    console.log(user)
    var userDupe = await userData.findOne({ userName: user.username })
    console.log(userDupe)
    if (!userDupe) {
        const newUser = new userData(user)
        const saveData = await newUser.save()
        res.status(200).send("User Saved Successfully")
    }
    else {
        res.status(400).send("Username Already Exists")
    }


})
module.exports = userrouter