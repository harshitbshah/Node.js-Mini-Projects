const express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error: 'Page Not Found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req,res) => {
    res.send([
        {name: 'Harshit', age: 27},
        {name: 'Jaini', age: 25}
    ]);
});

app.listen(3000);
module.exports.app = app;