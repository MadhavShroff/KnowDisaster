const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

/*mongoose.connect("mongodb://localhost:27017/vuenodedb").then(
          () => {console.log('Database connection is successful') },
          err => { console.log('Error when connecting to the database'+ err)}
);*/

const api = require('../server/route/api');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',api)

app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname,'../dist/index.html'));
});

var port = process.env.PORT || 4000;

app.listen (port,function(){
        console.log('Listening on port ' + port);
});