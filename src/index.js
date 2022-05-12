require('dotenv').config();

const https = require('https');
const fs = require('fs');

const express = require('express');
const mongoose = require('mongoose');
const v1ProjectRouter = require('./v1/routes/projectRoutes');

const app = express();
let local = {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || 'development'
}
const databaseURI = process.env.DATABASE_URI;

// Database Connection
mongoose.connect(databaseURI);
const database = mongoose.connection;

database.on('err', err => console.error(err));
database.once('connected', () => {
   console.log('Database Connected');
});

// Parsers
app.use(express.json());

// Routers
app.use('/api/v1/projects', v1ProjectRouter);

// Start Server
if (local.environment === 'production') {
    local.port = 443;
    https
        .createServer({
                key: fs.readFileSync('./key.pem', 'utf8'),
                cert: fs.readFileSync('./server.crt', 'utf8')
            },
            app)
        .listen(local.port, () => {
            console.log(`API listening on port ${local.port}.`);
        });
} else if (local.environment === 'development') {
    app.listen(local.port, () => {
        console.log(`API listening on port ${local.port}.`);
    });
}