var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DeviceSchema = new Schema({
    mac_address: String,
    vendor: String,
    last_seen: Date,
    tags: [{type: String}]
});

var Device = mongoose.model('devices',DeviceSchema,'devices');

module.exports = Device;
