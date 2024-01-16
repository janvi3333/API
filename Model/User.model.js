var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    Name : {type:String , require:true},
    Email : {type:String, require:true},
    Message : {type:String, require:true}
},
  {
    collection : 'User'
  }
)
module.exports = mongoose.model('User',User);        