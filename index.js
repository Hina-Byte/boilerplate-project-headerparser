// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Endpoint raíz
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html'); // Si tienes frontend
});

// Endpoint API
app.get('/api/whoami', (req, res) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});

// Escuchar en puerto
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
