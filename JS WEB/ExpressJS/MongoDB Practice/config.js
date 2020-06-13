const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb+srv://admin:<password>@cluster0-sjwc4.mongodb.net/test';

const client = new MongoClient(connectionStr);
client.connect(function (err) {
    const db = client.db('test-project');
    const people = db.collection('people');

    people.insert({ 'name': 'Plamen' }, (err, result) => {
        people.find({ 'name': 'Plamen' }).toArray((err, data) => {
            console.log(data);
        })
    })
})