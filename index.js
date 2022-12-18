const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Validate the login credentials
  if (username === 'admin' && password === 'password') {
    res.send('Welcome, admin!');
  } else {
    res.send('Invalid login credentials.');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
