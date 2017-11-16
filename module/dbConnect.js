let mongoose = require('mongoose');
let Devmongoose = mongoose.connect('mongodb://localhost:27017/project-manager');

module.exports = Devmongoose;
