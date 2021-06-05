const router = require("express").Router();
const db = require('../config/database')
// const db = require( '../models/index')
const User = require('../models/User')

module.exports = db => {
console.log(db)
//get user profile

router.get('/users', (req, res) =>
console.log("within"),
User.findAll({raw: true})
  .then(user => {
    console.log(user);
    res.json(user);
  })
  .catch(err => console.log("Error:"+ err)));

router.get('/user/:id', (req, res) =>
User.findByPk(req.param.id)
  .then(user => {
    console.log(user);
    res.json(user);
  })
  .catch(err => console.log("Error:"+ err)));

//patch new user profile
// router.put('/user/new', (req, res) =>
//   User.create({
//     first_name = req.body.first_name,
//     last_name = req.body.last_name,
//     email = req.body.email,
//     password = req.body.password
//   })
//     .then(user => res.redirect('/user'))
//     .catch(err => console.log(err))
//   )
}

