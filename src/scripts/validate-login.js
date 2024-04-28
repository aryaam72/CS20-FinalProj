const { MongoClient } = require('mongodb');
const connURL = "mongodb+srv://group12:12345@recipesrus.b1bvbdp.mongodb.net/?retryWrites=true&w=majority&appName=recipesRUS"

async function validateLogin(validUser) {
    const client = new MongoClient(connURL);
    await client.connect();
    console.log('Connected to the database');
    const database = client.db("UsersDB");
    const collection = database.collection("Users");
    console.log("login User:", validUser);
    const docs = await collection.findOne({email: validUser.email}  );
    console.log("login doc:", docs)
    if (!docs) {
        return false;
    } else {    
        console.log(docs.password);
        console.log(validUser.password);
        return docs.password === validUser.password;
    }
}

module.exports = {
    validateLogin,
};