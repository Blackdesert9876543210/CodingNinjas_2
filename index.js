
const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    return res.render('home', { title: "contact list"});
});
app.get('/practice', function(req, res) {
    return res.render('practice',{ title: "practice ejs page"});
})

app.listen(PORT, function (err) {
    if (err) {
        console.log('Error in running servver',err);
    }
    console.log("server started at port", PORT);
})