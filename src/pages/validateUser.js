const { MongoClient, ListCollectionsCursor } = require('mongodb');

async function validateUser(validUser) {
    const client = new MongoClient(connURL);
    await client.connect();
    console.log('Connected to the database');
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    const docs = collection.find({Email: validUser.email});
    if ((await collection.countDocuments({Email: validUser.email})) === 0) {
        await client.close();
        return true;
    } else {
        await client.close();
        return false;
    }
}

module.exports = {
    validateUser,
};