let mongoose = require('mongoose');
let DevSchema = require('../schema/DevSchema.js');
let DevBox = mongoose.model('DevBox', DevSchema);

module.exports = DevBox;