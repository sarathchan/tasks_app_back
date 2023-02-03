const router = require('express').Router(); 
const { addTask } = require('../controllers/taskController');

router.route('/').post(addTask).patch()


module.exports = router;