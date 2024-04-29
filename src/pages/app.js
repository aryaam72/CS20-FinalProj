const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 8080;
const { addUser } = require('../scripts/add-user');
const { validateLogin } = require('../scripts/validate-login');
const { createSession } = require('../scripts/createSession');
const { getUser } = require('../scripts/get-user');
const { changeSubscription } = require('../scripts/change-subscriptions');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/homepage.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');

})

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/search.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

app.get('/subscriptions', (req, res) => {
    res.sendFile(__dirname + '/subscriptions.html');
})

app.get('/subscribe', (req, res) => {
    res.sendFile(__dirname + '/pleaseSub.html');
})

app.get('/logout', (req, res) => {
    res.sendFile(__dirname + '/logout.html')
})


app.post('/add-user', async (req, res) => {
    console.log(req.body);
    if (await addUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password)) {

    } else {
        res.status(401);
        res.send("Email in Use");
    }
})

app.post('/change-subscription', async (req, res) => {
    await changeSubscription(req.body.email, req.body.isSubscribed);
    res.status(200);
    res.send("Changed Subscription");
})

app.post('/validate-login', async (req, res) => {
    console.log(req.body);
    if (await validateLogin(req.body)) {
        const user = await getUser(req.body.email);
        const result = await createSession(req.body.email);
        result.user = user;
        res.status(200).json(result);
    } else {
        res.status(401);
        res.send("Invalid Login");
    }
})


// starts the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
