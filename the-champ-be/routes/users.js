var express = require('express');
var router = express.Router();
const {postNewUser, loginUser, getAllUsers} = require('../controllers/usersControllers')

router.post('/register', postNewUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

module.exports = router;
