let mongoose = require("../dbConnect.js");
let LeaveSchema = require("../schema/LeaveSchema.js");

let LeaveNodule = mongoose.model("LeaveBox",LeaveSchema);

module.exports = LeaveNodule;