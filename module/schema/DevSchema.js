let mongoose = require('mongoose');
let DevSchema = mongoose.Schema;

let Todo = new DevSchema({
    IP:String,
    version:String,
    time:String,
    use:String,
    IPOP:String,
    usetime:String,
    teammate:String
});

module.exports = Todo;