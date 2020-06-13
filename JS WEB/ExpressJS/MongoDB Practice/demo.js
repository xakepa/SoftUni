
const MongoClient = require('mongodb').MongoClient;
const DB_PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://admin:${DB_PASSWORD}@demo-base-sjwc4.mongodb.net/students?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
