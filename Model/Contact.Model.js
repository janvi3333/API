var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Contact = new Schema({
    Name : {type:String , require:true},
    Email : {type:String, require:true},
    Message : {type:String, require:true},
},
  {
    collection : 'Contact'
  }
)
module.exports = mongoose.model('Contact',Contact);        