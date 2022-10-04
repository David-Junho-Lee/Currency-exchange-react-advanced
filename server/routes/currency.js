const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/', (req, res) => {
  request
    .get('https://api.apilayer.com/fixer/latest')
    .then((results) => {
      res.json(results.text)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
