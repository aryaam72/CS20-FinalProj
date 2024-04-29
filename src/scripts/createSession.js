const { MongoClient } = require('mongodb');
connURL = "mongodb+srv://group12:12345@recipesrus.b1bvbdp.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"

async function createSession(email) {
    const client = new MongoClient(connURL);
    await client.connect();
    const database = client.db("SessionDB");
    const collection = database.collection("Sessions");
    const session = await collection.insertOne({email: email});
    return session;

}

module.exports = {
    createSession,
}