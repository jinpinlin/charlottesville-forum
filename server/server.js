const express = require('express');
const uuid = require('uuid/v4');

var restRouter = require('./routes/rest');

const app = express();
const port = 3000;


app.use('/api/v1', restRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))