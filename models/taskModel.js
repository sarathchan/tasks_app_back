const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        message: "task name required"
    },
    assignedTo: {
        type: String,

    }
});

module.exports = mongoose.model('tasks', taskSchema);
