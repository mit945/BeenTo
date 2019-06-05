const mongoose = require('mongoose');


const placeSchema = new mongoose.Schema({
	location : {type: String , require:true},
	img : {type: String , require: false},
	duration: {type: String , require: true},
	expense : Number,
	fun : Boolean
	
})

const Place = mongoose.model('Place' , placeSchema)

module.exports = Place;