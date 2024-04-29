const { MongoClient } = require('mongodb');

const connURL = "mongodb+srv://group12:12345@recipesrus.b1bvbdp.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"

async function getUser(email) {
    const client = new MongoClient(connURL);
    await client.connect();
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    const user = await collection.findOne({email: email});
    await client.close();
    return user;
}

module.exports = {
    getUser,
};