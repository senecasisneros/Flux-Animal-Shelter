'use strict';

const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // createdAt: { type: Date, required: true, default: Date.now }
});


const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;