const express = require('express');
const jogosRouter = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/api/v1', jogosRouter);

module.exports = app;