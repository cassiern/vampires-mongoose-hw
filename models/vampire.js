const mongoose = require('mongoose')
const Schema = mongoose.Schema();

const vampireSchema = new Schema({
	name: {type: String, required: true},
	hair_color: 'blonde',
	eye_color: String,
	age: Number,
	loves: [''],
	location: String,
	gender: String,
	victims: {type: Number, min: 0}
})




const Vampire = mongoose.model('Vampire', vampireSchema)

module.exports = Vampire;







