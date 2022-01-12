const express = require('express');
const app = express();

// send a file as a response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
