const express = require('express');
const app = express();

const authRouter = require('./auth/auth.route').router;
require('./database');

const port = 3000;

app.use(express.json());

//Rutas
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.status(200).send('Hola mundo');
});

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});

exports.app = app;
