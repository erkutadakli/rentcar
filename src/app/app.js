const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouters = require('./routes/userRouter');
const carRouters = require('./routes/carRouter');
const carPropertiRouters = require('./routes/carPropertyRouter');
const languageRouters = require('./routes/languageRouter');
const photoRouters = require('./routes/photoRouter');
const languageDefinationRouters = require('./routes/languageDefinationRouter');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/api/user',userRouters);
app.use('/api/car',carRouters);
app.use('/api/properties',carPropertiRouters);
app.use('/api/language',languageRouters);
app.use('/api/photo',photoRouters);
app.use('/api/languagedefination',languageDefinationRouters);

//MongoDB config
mongoose.connect('mongodb://localhost/rentcar',
{
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
module.exports = app;