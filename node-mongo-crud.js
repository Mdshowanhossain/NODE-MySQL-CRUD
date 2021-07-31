// node-mongo
// node-mongo123456


const MongoClient = require('mongodb').MongoClient;

const URL = "mongodb+srv://node-mongo:node-mongo123456@cluster0.buk2o.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(URL, (error, MongoClientConnection) => {

    if (error) {
        console.log('Your Connection is Failed');
    } else {
        console.log('Your Connection is Success');

        insertData(MongoClientConnection);
    }
})


const insertData = (MongoClientConnection) => {

    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyCollection = MyDataBaseConnection.collection("Students");

    // var myData = { "name": "SOHAN", "Roll": "01", "Class": "ten", "City": "Khulna" }
    // const myData = { name: "OSMAN", age: "22", Roll: "02", Class: "Nini" }

    MyCollection.insertOne(myData, (error) => {
        if (error) {
            console.log('Data Inserted Failed');
        } else {
            console.log('Data Inserted Success');
        }
    })
}