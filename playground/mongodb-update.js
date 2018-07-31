//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err)
		return console.log('Unable to connect to MongoDB server.');

	console.log('Connected to MongoDB server.');

	const db = client.db("TodoApp");

	// db.collection("Todos").findOneAndUpdate(
	// 	{ _id: new ObjectID("5b59f1133bf2e6a9ed29f8e1") },
	// 	{ $set: { completed: true }},
	// 	{ returnOriginal: false }
	// ).then((result) => {
	// 	console.log(result);
	// });

	db.collection("Users").findOneAndUpdate(
		{ _id: new ObjectID("5b59f651fb57f1b58149c7f2") },
		{ 
			$set: { name: "David" },
	 		$inc: { age: -1 }
		},
		{ returnOriginal: false }
	).then((result) => {
		console.log(result);
	});

	//client.close();
});