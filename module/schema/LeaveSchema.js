let mongoose = require('mongoose');
let leaveSchema = mongoose.Schema;

let leaveSchemas = new leaveSchema({
    begintime:String,
    endtime:String,
    emergency:String,
    emergencyNum:String,
    assessing:String,
    teammate:String
});

module.exports = leaveSchemas;