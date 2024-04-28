const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 8080;
const { addUser } = require('./add-user');
const { validateLogin } = require('./validate-login');
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/homepage.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
})

app.post('/add-user', (req, res) => {
    console.log(req.body);
    addUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
})

app.post('/validate-login', (req, res) => {
    console.log(req.body);
    if (validateLogin(req.body)) {
        res.status(200);
        res.send("Sucess");
    }
       
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');

})

// starts the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
