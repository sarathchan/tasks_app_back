const router = require('express').Router();
const { login } = require('../controllers/userController.js');


router.route('/login').post(login)


module.exports = router;