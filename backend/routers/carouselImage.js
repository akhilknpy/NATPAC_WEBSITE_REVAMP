const express = require('express');
const multer = require('multer');
const Image = require('../models/imageSchema');
const fs = require('fs');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'topcarousel/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use(express.json());

// Route to upload image
app.post('/uploads', upload.single('image'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = new Image({
      filename: req.file.filename,
      path: req.file.path,
      name,
      description,
    });
    await image.save();
    res.json({ message: 'Image uploaded successfully', image });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Route to get all images
app.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

// Route to delete an image
app.delete('/images/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Image.findByIdAndDelete(id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

module.exports=app
