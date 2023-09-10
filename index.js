
const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
// app.use( function(req, res,next) {
//     req.myName = "ashim";
//     console.log("middleware one called");
//     next();
  
// });
// app.use( function (req, res, next) {
//     console.log("middleware two called");
//     console.log("my name from middware 2 ",req.myName);
//     next();
// })
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
    console.log(req.myName);
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
});
app.get('/delete-contact', function (req,res) {
    let phone = req.query.phone;
    let contactIndex = contactlist.findIndex(contact => contact.phone == phone);
    if (contactIndex != -1) {
        contactlist.splice(contactIndex,1);
    }
    return res.redirect('back');

    

})

app.listen(PORT, function (err) {
    if (err) {
        console.log('Error in running servver',err);
    }
    console.log("server started at port", PORT);
})