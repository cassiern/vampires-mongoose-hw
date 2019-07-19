// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampires')

connectionString = 'mongodb://localhost/vampires';

// 3. Connect your database and collection name
mongoose.connect(connectionString, { useNewUrlParser: true});

// 4. Open your mongoose connection
mongoose.connection.on('connected', ()=> {
	console.log(`mongoose connected to ${connectionString}`)
})
mongoose.connection.on('disconnected', ()=> {
	console.log(`mongoose disconnected to ${connectionString}`)
})
mongoose.connection.on('error', ()=> {
	console.log(`mongoose error: ${err}`)
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
const vampireData = require('./populateVampires')

Vampire.collection.insertMany(vampireData, (err, data)=>{
	console.log('added provided vampire data')
	mongoose.connection.close();
})


// // ### Add some new vampire data
Vampire.create({
	name: 'Stella',
	age: 700,
	loves: ['dead puppies', 'roasted pinapple', 'street racing'],
	location: 'Zimbabwe',
	gender: 'female',
	victims: 42
})
Vampire.create({
	name: 'Greta',
	age: 120,
	loves: ['dancing in lava', 'chocolate covered squid'],
	location: 'Vermont, USA',
	gender: 'female',
	victims: 11
})
Vampire.create({
	name: 'Greyson',
	age: 260,
	loves: ['blowing up things', 'motorcycles', 'shiny objects'],
	location: 'Netherlands',
	gender: 'male',
	victims: 24
})
Vampire.create({
	name: 'General Phelps',
	age: 801,
	loves: ['impersonating poeple', 'eating pickled snakes', 'playing life or death black jack'],
	location: 'Falkland Island',
	gender: 'male',
	victims: 199
})
// /////////////////////////////////////////////////
// // ## QUERYING
// /////////////////////////////////////////////////
// // ### Select by comparison

// //I completed 1-5, just changed the information within
// // this below as everything was the same except
// // ...{victims: {changed what was in here}}...$gt,$lt,$lte,$ne
Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, vampire)=> {
	console.log(vampire)
})

Vampire.find({
	victims: {$not: {$eq: 210234}}
	},(err, vampires) => {
	if(err){
		console.log(err, '<--err')
	}else{
		console.log(vampires, '<-- vampires')
	}
})


/////////////////////////////////////////////////
// ### Select by exists or does not exist

//find title from Alex the student
Vampire.find({
    title: {$exists: true}
    }, (err, vampires) => {
        if(err){
            console.log(err, "<--err");
        } else {
            console.log(vampires, "<-- vampire");
        }
        mongoose.connection.close();
})

Vampire.find({
	victims: {$exists: false},
	 }, (err, vampires)=>{
	 	if(err){
	 		console.log(err, '<-- err')
	 	}else{
	 		console.log(vampires)
	 	}
})
Vampire.find({
	title: {$exists: true},
	victims: {$exists: false}
	}, (err, vampires)=> {
		if(err){
			console.log(err, '<-- err')
		}else{
			console.log(vampires, '<-- vampirers')
		}
	})
Vampire.find({
	$and: [{victims: {$exists: true}}, 
	{victims: {$gt: 1000}}],
	 }, (err, vampires)=> {
		if(err){
			console.log(err, '<-- err')
		}else{
			console.log(vampires, '<-- vampires')
		}
	 })
// /////////////////////////////////////////////////
// // ### Select with OR

Vampire.find({
	$or: [{location: 'New York, New York, US'}, 
	{location: 'New Orleans, Louisiana, US'}], 
	}, (err, locateV) => {
		if(err){
			console.log(err, '<-- err')
		}else{
			console.log(locateV, '<-- locateV')
		}
	});
Vampire.find({
	$or: [{loves: 'brooding'}, 
	{loves: 'being tragic'}],
	}, (err, vampires)=> {
		if(err){
			console.log(err, '<-- err')
		}else{
			console.log(vampires, '<-- vampires')
		}
	})
Vampire.find({
	$or: [{victims: {$gt: 1000}},
	{loves: 'marshmallows'}],
	 }, (err, vampires)=> {
	 	if(err){
	 		console.log(err, '<-- err')
	 	}else{
	 		console.log(vampires, '<-- vampires')
	 	}
	 })
Vampire.find({
	$or: [{hair_color: 'red'},
	{eye_color: 'green'}],
}, (err, vampires)=> {
	if(err){
		console.log(err, '<-- err')
	}else{
		console.log(vampires, '<-- vampires')
	}
})


















/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
