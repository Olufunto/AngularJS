const mongoose = require('mongoose');

// Book Schema
const readingSchema = mongoose.Schema({
	firstname:{
		type: String,
		required: true
	},
	lastname:{
		type: String,
		required: true
	},
	highblood:{
		type: String
	},
	lowblood:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Reading = module.exports = mongoose.model('Reading', readingSchema);

// Get Reading
module.exports.getReading = (callback, limit) => {
	Reading.find(callback).limit(limit);
}

// Get a Reading
module.exports.getReadingById = (id, callback) => {
	Reading.findById(id, callback);
}

// Add Reading
module.exports.addReading = (reading, callback) => {
	Reading.create(reading, callback);
}

// Update Reading
module.exports.updateReading = (id, reading, options, callback) => {
	var query = {_id: id};
	var update = {
		firstname: reading.firstname,
		lastname: reading.lastname,
		highblood: reading.highblood,
		lowblood: reading.lowblood,
		create_date: reading.create_date

	}
	Reading.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeReading = (id, callback) => {
	var query = {_id: id};
	Reading.remove(query, callback);
}