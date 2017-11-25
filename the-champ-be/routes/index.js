const express = require('express');
const router = express.Router();
const User = require('../model/userSchema')


router.get('/allusers',(req, res, next) => {
  User.find()
      .then(users => {
          res.status(200)
          res.send(users)
      })
      .catch((err) => next(err))
});


router.post('/login', (req, res) => {
   User.findOne({username: req.body.username, password: req.body.password}, (err, user)=> {
     if(err){
       console.log(err);
       return res.status(500).send();
     }
     
     if(!user) {
       res.redirect('http://localhost:3000/signin');
       res.status(404).send()
     }

     if(user) {
       res.redirect('http://localhost:3000/platform');
       res.status(200).send();
     }
   })
})

router.post("/register", (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    twitterhandle: req.body.twitterhandle,
    currentchamp: false,
    provoked: {
      wasprovoked: false,
      challengeaccepted: false
    }
  });

  newUser.save((err, savedUser) => {
    if(err) {
      console.log(err)
      console.log(res.status(500))
      return res.status(500).send()
    }
    return res.status(200).send()
  }).then(() => {
    res.redirect('http://localhost:3000/platform')
  })
})

module.exports = router;
