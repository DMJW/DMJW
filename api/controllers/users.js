const express = require('express')
const router = express.Router()
const {poolQuery} = require('../helpers')

// if the username doesn't exist, console.log 'user doesnt exist'
// if the username does exist but the password is wrong console log password is wrong

router.get('/', (req, res) => {
  const {username, password} = req.query;
  const post = {username, password}
  return poolQuery(`INSERT INTO users SET ?`, post).then(
    () => res.send({success: true})
  ).catch(
    error => {
      console.error(error)
      res.status(500).send({error})
    }
  )
})

module.exports = router
