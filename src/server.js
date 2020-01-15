const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://root:123@map-ialg6.mongodb.net/api_map?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(routes);

app.listen(3000);
