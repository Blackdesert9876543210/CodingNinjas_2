
const express = require('express');
const PORT = 3000;
const app = express();

app.listen(PORT, function (err) {
    if (err) {
        console.log('Error in running servver',err);
    }
    console.log("server started at port", PORT);
})