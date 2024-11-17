// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Project = require('../models/projectSchema');
const cors = require('cors');

const projRouter = express();


// Middleware
projRouter.use(express.json());
projRouter.use('/resproj', express.static(path.join(__dirname, 'resproj'))); // Serve images statically

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'resproj/');
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName); // Name file uniquely
    },
});
const upload = multer({ storage });

// Route to create a project with image upload
projRouter.post('/addproj', upload.single('projImage'), async (req, res) => {
    try {
        const { projName, projDescription, projType } = req.body;
        const imageName = req.file ? req.file.originalname : '';
        const imagePath = req.file ? `/resproj/${req.file.filename}` : '';

        const project = new Project({
            projName,
            imageName,
            imagePath,
            projDescription,
            projType,
        });
        await project.save();
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create project' });
    }
});

// Route to update a project with image upload
projRouter.put('/updateproj/:id', upload.single('projImage'), async (req, res) => {
    try {
        const { projName, projDescription, projType } = req.body;
        const imageName = req.file ? req.file.originalname : req.body.imageName;
        const imagePath = req.file ? `/resproj/${req.file.filename}` : req.body.imagePath;

        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { projName, imageName, imagePath, projDescription, projType },
            { new: true }
        );
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update project' });
    }
});

// Route to delete a project
projRouter.delete('/deleteproj/:id', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

// Route to get all projects
projRouter.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});
module.exports=projRouter