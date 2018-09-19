const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('DB connection failed');
    }
    console.log('DB connection successful');

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5ba1a4c39344053ff46a8367')}).then(docs => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Failed to fetch query', err);
    });

    // db.collection('Todos').find().count().then(count => {
    //     console.log('Todos count');
    //     console.log(count);
    // }, err => {
    //     console.log('Failed to fetch query', err);
    // });

    client.close();
});