const express = require('express');
const mongoose = require('mongoose'); 
const path = require('path');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

mongoose.connect('mongodb://jplin:jplin1992@ds149030.mlab.com:49030/forum_email',
{ useNewUrlParser: true });
app.use(express.static(path.join(__dirname, '../public/')));

app.use('/', indexRouter);
app.use('/api/v1', restRouter);

var birthday = new Date('2011-12-30T02:14:56.000Z');
console.log(birthday);
console.log(new Date('Thu Dec 29 2011 20:14:56 GMT-0600 (CST)'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))