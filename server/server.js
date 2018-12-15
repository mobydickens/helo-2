require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const controller = require('./controllers');
const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const port = 4000;

const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  app.listen(port, () => console.log(`server up at port ${port}`));
})

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// REGISTER USER
app.post('/auth/register', controller.newUser);
// LOGIN USER
app.post('/auth/login', controller.loginUser);
// CURRENT USER
app.get('/api/user', controller.currentUser);