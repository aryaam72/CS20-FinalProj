const { MongoClient } = require('mongodb');
import { User } from './user';
import { validateUser } from './validateUser';

connURL = "mongodb+srv://group12:12345@recipesrus.b1bvbdp.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"

async function addUser(firstName, lastName, email, password) {
    const client = new MongoClient(connURL);
    await client.connect();
    console.log('Connected to the database');
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    let newUser = new User(firstName, lastName, email, password);
    if (validateUser(newUser)) {
        await collection.insertOne({newUser});
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