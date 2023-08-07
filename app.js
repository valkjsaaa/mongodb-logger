require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const mongodbUri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;
mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Define Schema
const logSchema = new mongoose.Schema({
    timestamp: Date,
    key: String,
    len: Number
});

const Log = mongoose.model('Log', logSchema);

app.use(bodyParser.json());

app.post('/log', (req, res) => {
    const newLog = new Log({
        timestamp: new Date(),
        key: req.body.key,
        len: req.body.len
    });

    newLog.save()
        .then(log => res.json(log))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
