var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productSchema = new Schema({
  id: Number,
  name: String,
  softwarecode: String,
  downloadlocation: String
});

module.exports = mongoose.model('Product', productSchema);