const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const ImageData=require('../models/imageSchema')

const router = express.Router();
router.use(express.json());
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage });
  
  // Route to get image list
  router.get('/images', async (req, res) => {
    try {
      const images = await ImageData.find();
      res.json(images);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Route to upload a new image
  router.post('/images', upload.single('image'), async (req, res) => {
    const { name } = req.body;
    const filePath = `./uploads/${req.file.filename}`;
    try {
      const newImage = new ImageData({ name, filePath });
      await newImage.save();
      res.status(201).json(newImage);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Route to delete an image by ID
  router.delete('/images/:id', async (req, res) => {
    try {
      const image = await ImageData.findByIdAndDelete(req.params.id);
      if (image) {
        fs.unlinkSync(path.join(__dirname, image.filePath)); // Delete file from uploads folder
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send(err);
    }
  });
  module.exports=router