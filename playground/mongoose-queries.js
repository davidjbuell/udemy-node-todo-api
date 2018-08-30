const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '75b886a29e34d112f2c96c3ec';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todo by id', todo);
// });

User.findById('5b881b95ae19d34ed025ef54').then((user) => {
    if (!user) { return console.log('Unable to find user.'); }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});