const mongoose = require('mongoose')


const vampireSchema = new mongoose.Schema({
	name: {type: String, required: true},
	hair_color: {type: String, default: 'blonde'},
	eye_color: String,
	age: Number,
	loves: [String],
	location: String,
	gender: String,
	victims: {type: Number, min: 0}
})




const Vampire = mongoose.model('Vampire', vampireSchema)

module.exports = Vampire;







