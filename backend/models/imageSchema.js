// models/Image.js
const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  filename: String,
  path: String,
  name: String,
  description: String,
  uploadedAt: { type: Date, default: Date.now },
});

const imageData = mongoose.model('Image', imageSchema);
module.exports=imageData