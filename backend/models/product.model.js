const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  shortDesc: { type: String, required: true },
  addPhoto1: { type: String, required: true },
  addPhoto2: { type: String },
  addPhoto3: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
