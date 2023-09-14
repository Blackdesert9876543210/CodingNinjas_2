const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contats_list_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'error connection to db'));

 db.on('open', function () {
    console.log('Successfully conneted to database');
 });