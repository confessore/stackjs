'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../stackjs-react/build')));
app.use((req, res) => {
    res.status(200).send('Hello, world!');
});
  
app.listen(PORT, (error) => {
    if(!error) {
        console.log(`App listening on port ${PORT}`);
        console.log('Press Ctrl+C to quit.');
    }
    else 
        console.log("Error occurred, server can't start", error);
    }
);