// node-mongo
// node-mongo123456


const MongoClient = require('mongodb').MongoClient;

const URL = "mongodb+srv://node-mongo:node-mongo123456@cluster0.buk2o.mongodb.net/School?retryWrites=true&w=majority"

MongoClient.connect(URL, (error) => {

    if (error) {
        console.log('Your Connection is Failed');
    } else {
        console.log('Your Connection is Success');
    }
})