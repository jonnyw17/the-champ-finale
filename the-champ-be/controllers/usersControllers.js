const mongoose = require('mongoose');
mongoose.Promise = Promise;
const User = require('../model/userSchema');

getAllUsers = (req, res, next) => {
  User.find()
      .then(users => {
          res.status(200)
          res.send(users)
      })
      .catch((err) => next(err))
};

 loginUser = (req, res) => {
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
}

postNewUser = (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password,
    twitterhandle: req.body.twitterhandle,
    currentchamp: false,
    provoked: {
      wasprovoked: false,
      challengeaccepted: false
    }
  });

  newUser.save((err, savedUser) => {
    if(err) {
      console.log(err.message);
      res.redirect('http://localhost:3000/signup');
    }

    if(savedUser) {
      //need to ask ali about how to send
      res.redirect('http://localhost:3000/platform');
    }
  }).catch((err) => next(err))
}

module.exports = {
  postNewUser,
  loginUser,
  getAllUsers
};
