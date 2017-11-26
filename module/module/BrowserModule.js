let mongoose = require('../dbConnect.js');
let browSchema = require('../schema/BrowserSchema.js');
let browBox = mongoose.model('BrowBox', browSchema);

module.exports = browBox;