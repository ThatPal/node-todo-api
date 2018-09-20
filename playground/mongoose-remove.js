const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then(todo => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5ba2db1fcef08e29247d59d0').then(todo => {
//     console.log(todo);
// });

Todo.findOneAndRemove({
    _id: '5ba305a6ab195231e4acf9c1'
}).then(todo => {
    console.log(todo);
});