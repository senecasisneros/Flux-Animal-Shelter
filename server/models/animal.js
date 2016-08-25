'use strict';

const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  age: { type: Number },
  image: { type: String },
  // createdAt: { type: Date, required: true, default: Date.now },

  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }

});


const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
