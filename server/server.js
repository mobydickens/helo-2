require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bcrypt = require('bcryptjs');
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
app.post('/auth/register', async (req, res) => {
  let { username, password, photo } = req.body;
  const db = req.app.get('db');
  let user = db.find_user([ username ]);
  if(user[0]) {
    return res.status(200).send({ loggedIn: false, message: 'Username taken!'} );
  } else {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync( password, salt );
    let newMember = await db.new_member([ username, hash, photo ]);
    req.session.user = { username: newMember[0].username, id: newMember[0].id };
    console.log(req.session.user);
    res.status(200).send({ loggedIn: true, message: 'Signup a success!', username: newMember[0].username, id: newMember[0].id, photo: newMember[0].photo })
  }
})
