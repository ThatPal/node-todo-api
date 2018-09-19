const {MongoClient, ObjectID} = require('mongodb');

let objId = new ObjectID();
console.log(objId.getTimestamp());

MongoClient.connect(
    'mongodb://localhost:27017/TodoApp', 
    { useNewUrlParser: true }, 
    (err, client) => {
        if (err) {
            return console.log('DB connection failed');
        }
        console.log('DB connection successful');

        const db = client.db('TodoApp');

        // db.collection('Todos').insertOne({
        //     text: 'Some todo item',
        //     completed: false
        // }, (err, result) => {
        //     if (err) {
        //         return console.log('Failed to add item', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

        db.collection('Users').insertOne({
            name: 'Evan Pal',
            age: 24,
            location: 'Brooklyn, NY'
        }, (err, result) => {
            if (err) {
                return console.log('Failed to add user', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
            console.log(result.ops[0]._id.getTimestamp());
        });
        client.close();
    });