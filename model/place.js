const mongoose = require('mongoose');


const placeSchema = new mongoose.Schema({
	location : {type: String , require:true},
	img : {type: String , require: false},
	date: String,
	duration: {type: String , require: true},
	expense : {type:Number, require: true},
	fun : Boolean
	
})

const Place = mongoose.model('Place' , placeSchema);

module.exports = Place;