let mongoose = require('mongoose');
let projectMongoose = mongoose.connect('mongodb://localhost:27017/project-manager');

module.exports = projectMongoose;
