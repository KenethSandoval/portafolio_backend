const express = require('express');
const app = express();
const { PORT } = process.env;

app.get('/', (req, res) => {
  res.status(200).send('Hola mundo');
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

module.exports = app;
