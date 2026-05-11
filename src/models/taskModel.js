const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: [true, 'Please add a task title'],
            trim: true, 
        },
        description: {
            type: String,
            required: false, 
        },
        status: {
            type: String,
            required: true,
           
            enum: ['To Do', 'In Progress', 'Done'], 
            default: 'To Do', 
        },
    },
    {
        
        timestamps: true,
    }
);


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;