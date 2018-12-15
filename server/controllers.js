const bcrypt = require('bcryptjs');

module.exports = {

  // REGISTER NEW USER
  newUser: async (req, res) => {
    let { username, password, photo } = req.body;
    const db = req.app.get('db');
    let user = await db.find_user([ username ]);
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
  },
  loginUser: async (req, res) => {
    let { username, password } = req.body;
    console.log(username);
    const db = req.app.get('db');
    let member = await db.find_user([ username ]);
    console.log('user', member)
    if(!member[0]) {
      return res.status(200).send({ loggedIn: false, message: 'Username not found!'});
    } else {
      let result = bcrypt.compareSync( password, member[0].hash_value );
      if(result) {
        req.session.user = { username: member[0].username, id: member[0].id };
        return res.status(200).send({ loggedIn: true, message: 'Successful login', username: member[0].username, id: member[0].id, photo: member[0].photo });
      } else {
        return res.status(200).send({ loggedIn: false, message: 'Incorrect password!'});
      }
    }
  },
  currentUser: (req, res) => {
    if(req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send({ loggedIn: false, message: 'Please log in to view account'})
    }
  },
  allPosts: async (req, res) => {
    const db = req.app.get('db');
    let posts = await db.all_posts();
    if(!posts[0]) {
      res.status(200).send({ message: 'There are no posts to display!'} );
    } else {
    res.status(200).send(posts);
    }
  },
  logoutUser: (req, res) => {
    console.log('running')
    req.session.destroy();
    res.status(200).send({ loggedIn: false })
  }
}