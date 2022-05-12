const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    images: {
        required: false,
        type: Array
    },
    tags: {
        required: false,
        type: Array
    }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;