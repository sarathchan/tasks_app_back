const userModel = require('../models/userModel.js');
// console.log(taskModel.insertMany());

exports.login =async (req, res) => {
    const { username,password } = req.body;
    try {
        const user = await userModel.findOne({ username, password })
        if (user) {
            res.status(200).json( {
                status: 200,
                user 
            })
        }
        else {
            res.status(400).json({
                status: 400,
                message: {
                    error: 'username of password is incorrect'
                }
            })
        }
    }
    catch (err) {
        res.json({
            status: 400,
            message: {
                error : err.message
            }
        })
    }
}