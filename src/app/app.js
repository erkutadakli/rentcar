const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouters = require('./routes/userRouter');
const carRouters = require('./routes/carRouter');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user',userRouters);
app.use('/api/car',carRouters);



//MongoDB config
mongoose.connect('mongodb://localhost/rentcar',
{
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
module.exports = app;