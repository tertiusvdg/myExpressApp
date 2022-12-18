const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var loggedIn = false;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  if (loggedIn == false) {
    res.sendFile(path.join(__dirname, 'views/login.html'));
  } else {
    res.sendFile(path.join(__dirname, 'views/main.html'));
  }
});

app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/main.html'));
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Validate the login credentials
  if (username === 'admin' && password === 'password') {
    loggedIn = true;
    res.redirect('/');
  } else {
    res.send('Invalid login credentials.');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
