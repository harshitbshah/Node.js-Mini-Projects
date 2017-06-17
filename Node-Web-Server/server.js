const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {
    var now = new Date().toString();
    log = `${now} : ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log',log + '\n', (err) => {
    if(err)    
        console.log('Unable to append server.log');
    });
    next();
});

// app.use((req,res,next) => {
//     res.render('maintenance.hbs',{
//         pageTitle: 'We are in Maintenance Mode',
//         welcomeMessage: 'The site is currently being updated. We will be back soon'
//     });
// });

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/',(req,res) => {
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome To Home Page'
    });
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page',
    });
});

app.get('/projects',(req,res) => {
    res.render('projects.hbs',{
        pageTitle: 'Portfolio Page',
    });
});

app.get('/bad',(req,res) => {
    res.send({
       error: 'Error handling request!' 
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});