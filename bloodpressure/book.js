var mongoose = require('mongooose');


var bookSchema = mongoose.Schema({
title:{
	type: String,
	required: true
},
genre:{
	type: String
	
},
create_date:{
	type: Date,
	default: Date.now
}


});

var Book = module.exports = mongoose.model('Book',bookSchema);

module.exports.getBooks = function(callback,limit){ 
	Book.find(callback).limit(limit);
}