const taskModel = require('../models/taskModel.js');
// console.log(taskModel.insertMany());

exports.addTask =async (req, res) => {
    const body = req.body;
    try {
        const doc = new taskModel(body);
        const saved = await doc.save();
        res.json( {
            status: 201,
            message :{
                task : saved
            }
        })
        // cons
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