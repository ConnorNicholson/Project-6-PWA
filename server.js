// Requiring modules: dotenv (for password protection), express (for express server), helmet (for security), and the apiRoutes.js file (for express Routing)
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const fs = require('file-system');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
const usersRoutes = require('./routes/index');

// Set app to express function
const app = express();
// Sets PORT to equal 3000
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet()); // Added security

// Morgan logging - will log all HTTP request to the morgan.log file
app.use(logger('common', {
    stream: fs.createWriteStream('./logging/morgan.log', {flags: 'a'})
}));
// morgan format
app.use(logger('dev'));

// calls routes from apiRoutes.js file
app.use('/api', apiRoutes);

// calls routes for jwt user signup/login
app.use('/api/users', usersRoutes);

// MongoDB connection string
let uri = "";

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    uri = process.env.ATLAS_URI
} else {
    // uri = "mongodb://localhost/productsData"
    uri = process.env.ATLAS_URI
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection is live");
})

// instructs express server to listen on a specific port, than console logs the current port (Whether the env var or 3000)
app.listen(PORT, function() {
    console.log(`Server now listening on port ${PORT}`);
});