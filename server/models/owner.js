'use strict';

const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  pet: { type: String }
});


const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
