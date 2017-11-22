let mongoose = require('mongoose');
let browSchema = mongoose.Schema;

let browSchemas = new browSchema({
    IE:String,
    firefox:String,
    chrome:String,
    teammate:String
});

module.exports = browSchemas;