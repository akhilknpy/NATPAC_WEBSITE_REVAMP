// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projName: {
        type: String,
        required: true,
    },
    imageName: { // Field for storing the image name
        type: String,
    },
    imagePath: { // Field for storing the image path
        type: String,
    },
    projDescription: {
        type: String,
    },
    projType: { // Field for project type
        type: String,
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Project', projectSchema);
