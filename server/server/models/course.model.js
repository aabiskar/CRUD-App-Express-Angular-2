var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  title: String,
  author: String,
  category: String,
  duration:String,
  price: Number,
  date : Date

});

module.exports = mongoose.model('Course', CourseSchema);