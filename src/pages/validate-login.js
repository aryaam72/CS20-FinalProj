const { MongoClient } = require('mongodb');

async function validateLogin(validUser) {
    const client = new MongoClient(connURL);
    await client.connect();
    console.log('Connected to the database');
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    const docs = collection.findOne({email: validUser.email});
    if ((await collection.countDocuments({email: validUser.email})) === 0) {
        return false;
    } else {
        return docs.password === validUser.password
    }
}

module.exports = {
    validateLogin,
};