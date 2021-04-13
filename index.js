const express = require('express'),
    app = express(),
    mysql = require('mysql2'), // import mysql module
    cors = require('cors'),
    bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// use the modules
app.use(cors())
app.use(bodyParser.json());

// make server object that contain port property and the value for our server.
const server = {
    port: process.env.PORT || 5000
};

const usersRouter = require('./routes/users');
const policeRouter = require('./routes/police');
const webhookRouter = require('./routes/webhook');
const testesRouter = require('./routes/testes');
const discordRouter = require('./routes/discord');
const conceRouter = require('./routes/conce');

app.use('/users', usersRouter);
app.use('/police', policeRouter);
app.use('/webhook', webhookRouter);
app.use('/testes', testesRouter)
app.use('/discord', discordRouter)
app.use('/conce', conceRouter)

// starting the server
app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));

// setup database
db = mysql.createConnection({
      host: '127.0.0.1,
    user: 'root',
    password: '',
    database: 'vrp'
})

//db2 = mysql.createConnection({
//    host: '127.0.0.1',
 //   user: 'root',
  //  password: '',
  //  database: 'wordpress'
//})

db3 = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'vegas'
})


