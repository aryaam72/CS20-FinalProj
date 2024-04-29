const { MongoClient } = require('mongodb');
const { User }  = require('./user');
const { validateUser } = require('./validateUser');

const connURL = "mongodb+srv://group12:12345@recipesrus.b1bvbdp.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"

async function addUser(firstName, lastName, email, password) {
    const client = new MongoClient(connURL);
    await client.connect();
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    let newUser = new User(firstName, lastName, email, password);
    if (await validateUser(newUser)) {
        await collection.insertOne({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            isSubscribed: false});
        await client.close();
        return true;
    } else {
        await client.close();
        return false;
    }
}

module.exports = {
    addUser,
};