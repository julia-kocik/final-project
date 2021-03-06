const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  addPhoto1: { type: String, required: true },
  addPhoto2: { type: String, required: true },
  addPhoto3: { type: String, required: true },
  countInStock: { type: Number,required: true },
});

module.exports = mongoose.model('Product', productSchema);





