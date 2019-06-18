const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

const usersRoute = require('./Routes/users');

mongoose.connect('mongodb://localhost/ejemplo',  {
    useNewUrlParser: true  
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/users', usersRoute);

//start the server
app.listen(app.get('port'), () => {
    console.log( colors.green('server on port ', app.get('port')));
} );

