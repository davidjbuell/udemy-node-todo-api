//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err)
		return console.log('Unable to connect to MongoDB server.');

	console.log('Connected to MongoDB server.');

	const db = client.db("TodoApp");

	// deleteOne
	// db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
	// 	console.log(result);
	// });

	// deleteMany
	// db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection("Todos").findOneAndDelete({text: "Eat lunch"}).then((result) => {
	// 	console.log(result);
	// });

	//db.collection("Users").deleteMany({name: "David"});

	db.collection("Users").findOneAndDelete({_id: new ObjectID("5b59f6664b2c18b2adbc4e28")}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	});

	//client.close();
});