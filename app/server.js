// server.js

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/rush', function(req, res) {
    res.sendFile(path.join(__dirname, 'rush.html'));
});

app.get('/familytree', function(req, res) {
    res.sendFile(path.join(__dirname, 'familytree.html'));
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running on port ' + (process.env.PORT || 4000));
}); 