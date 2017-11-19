let mongoose = require('../dbConnect.js');
let DevSchema = require('../schema/DevSchema.js');
let DevBox = mongoose.model('DevBox', DevSchema);

module.exports = DevBox;