
const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
var contactlist = [
    {
        name: "ashim",
        phone : "888888888888"
    },
    {
        name: "santu",
        phone: "00000000000"
    },
    {
        name: "kali",
        phone: "9999999999999"
    }
]

app.get('/', function (req, res) {
    return res.render('home', { 
        title: "contact list",
        contact_list: contactlist
    });
});
app.get('/practice', function(req, res) {
    return res.render('practice',{ 
        title: "practice ejs page"
    });
});

app.post('/create-contact', function(req, res) {
    contactlist.push({
        name: req.body.name,
        phone: req.body.phone
    });
    return res.redirect('/');
})

app.listen(PORT, function (err) {
    if (err) {
        console.log('Error in running servver',err);
    }
    console.log("server started at port", PORT);
})