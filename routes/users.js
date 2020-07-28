const express = require('express')
const router = new express.Router()

router.get('/login', (req, res) => {
    res.send('Hello Login')
})

router.get('/registration', (req, res) => {
    res.send('Hello Registration')
})

module.exports = router