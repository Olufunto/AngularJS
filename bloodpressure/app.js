const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

//Genre =require('./models/genre');
//Book =require('./models/book');
Reading =require('./models/reading');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/oo_akinyemi');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/reading ');
});

app.get('/api/reading', (req, res) => {
	Reading.getReading((err, reading) => {
		if(err){
			throw err;
		}
		res.json(reading);
	});
});

app.post('/api/reading', (req, res) => {
	var reading = req.body;
	Reading.addReading(reading, (err, reading) => {
		if(err){
			throw err;
		}
		res.json(reading);
	});
});

app.put('/api/reading/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Reading.updateReading(id, reading, {}, (err, reading) => {
		if(err){
			throw err;
		}
		res.json(reading);
	});
});

app.delete('/api/reading/:_id', (req, res) => {
	var id = req.params._id;
	Reading.removeReading(id, (err, reading) => {
		if(err){
			throw err;
		}
		res.json(reading);
	});
});


app.listen(8302);
console.log('Running on port 8302...');