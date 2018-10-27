const express = require('express');
const app = express();
const mongoose = require('mongoose');
const assert = require('assert');
const logger = require('morgan');
const https = require('https');
const cors = require('cors')


// const dburl = 'mongodb://localhost:27017'
const LocationiqApiKey = process.env.LOCIQ_API_KEY || 'ebc99a5b59f0fe';
const OpenWeatherApiKey = process.env.OPENWEATHER_API_KEY || '204d78ab2285f3320b112fa62e21a3fc';
const dburl = 'mongodb://knowdisaster:akFZA5GuQ7CMzXEAlXg9BaBfgtarKOg9pKm9VTDDkPXk0OvRBkGuq9dqat1I8w0g6C4pinOQmCKocInOt3TQQw==@knowdisaster.documents.azure.com:10255/?ssl=true&replicaSet=globaldb&appname=@South India'

// Database Name
const dbName = 'KnowDisasterDatabase';
var isConnected = "Not Connected";

// ******************* Connecting to database : 

mongoose.connect(dburl, { useNewUrlParser: true }).then( () => {
	console.log('Connected');
	isConnected = 'Connected';
}).catch(err => {
	console.log(err);
	isConnected = 'Not Connected';
});

// ********************* Defining Schemas for Documents : 

const nameAndLocationObject = mongoose.Schema({
	number: String, 
	location: String,
	lat: String,
	long: String,
});

const NALO = mongoose.model('Collection1', nameAndLocationObject);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('combined'));
app.use(cors());
app.use(express.static('static'))

// ********************* App routes : 

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/index.html'));
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(`GET from ${ip} at /`);
})

/* 
addNumLocObj = {
	num: "",
	loc: "",
	lat: "",
	long: ""
}
*/

app.get('/api/addNumLoc/:num/:loc', async (req, res) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(`GET from ${ip} at /api/addNumLoc`);
	var works = true;
	foo = {
		'number' : req.params.num,
		'location' : req.params.loc,
		'lat' : "0",
		'long' : "0"
	}
	if(req.params.num == 0 && req.params.loc == 0 && Number.parseInt(req.params.num) < 1000000000) {
		res.send({error: "Enter Valid Details"})
	}
	var ApiResponseObjectString = " ";
	var firstTime = NALO.deleteOne({ number: req.headers.num }, function (err) { console.log(err)});
	if(foo.lat == 0 && foo.long == 0) { 
		https.get(`https://eu1.locationiq.com/v1/search.php?key=${LocationiqApiKey}&q=${foo.location}&format=json`,  (resp) => {
		    	resp.on("data", function (data) { ApiResponseObjectString += data; });
		    	resp.on("end", async function () {
		    		ApiResponseObject = JSON.parse(ApiResponseObjectString);
		    		try {
						foo.lat = ApiResponseObject[0].lat;
						foo.long = ApiResponseObject[0].lon;
						foo.location = ApiResponseObject[0].display_name;
					} catch(e) {
						console.log(`Exception Thrown: ${e}`);
						works = false;
					}
					if(works) {
						let anObject = new NALO(foo);
						const result = await anObject.save();
						console.log("Added to Database: " + result);
						if(firstTime) {
							string = '';
							https.get(`https://smsknowdisaster.azurewebsites.net/api/sendMessage1/${foo.number}`, (r)=>{
								r.on("data", function (data) { string += data; });
						        r.on("end", async () => {
						            console.log(string);
						        });
						    });
						}
						res.send(result);  // sending response 
					} else {
						res.send({err: "LocationIQ Api Not working"})
					}
		    });
		})
	} else if (foo.location == 0 && foo.lat != 0 && foo.long !=0) {
		https.get(`https://eu1.locationiq.com/v1/reverse.php?key=${LocationiqApiKey}&lat=${foo.lat}&lon=${foo.long}&format=json`, resp => {
			resp.on("data", function (data) { ApiResponseObjectString += data;});
		    	resp.on("end", async function () {
		    		ApiResponseObject = JSON.parse(ApiResponseObjectString);
		    		try {
						foo.lat = ApiResponseObject.lat;
						foo.long = ApiResponseObject.lon;
						foo.location = ApiResponseObject.display_name;
					} catch(e) {
						console.log(e);
						works = false;
					}
					if(works) {
					let anObject = new NALO(foo);
					const result = await anObject.save();
					console.log("Added to Database: " + result);
					if(firstTime) {
						string = '';
						https.get(`https://smsknowdisaster.azurewebsites.net/api/sendMessage1/${foo.number}`, (r)=>{
							r.on("data", function (data) { string += data; });
						    r.on("end", async () => {
						        console.log(string);
						    });
						});
					}
					res.send(result);  // sending response 
				} else {
					res.send({err: "LocationIQ Api Not working"})
				}
		    });
		})
	} else {
		res.status(400).send("Bad Request")
	}
});

app.get('/api/weather/:num', (req, res) => {
	var num = req.params.num;
	NALO.find({ number: num}, (err, docs) => {
		if (err != null) console.log(err);
		str = '';
		https.get(`https://api.openweathermap.org/data/2.5/weather?lat=${docs[0].lat}&lon=${docs[0].long}&APPID=${OpenWeatherApiKey}`, resp => {
			resp.on("data", (data) => { 
				str += data;
			});
		    resp.on("end", async () => {
		    	var obj = JSON.parse(str);
		    	res.send(obj);
		    });
		});
	});
})

app.get('/api/heatmap', (req, res) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(`GET from ${ip} at /api/heatmap`);
	var d = [];
	NALO.find({ number: { $gte: 0 }}, function (err, docs) {
		for (var i = 0; i < docs.length; i++)
			d.push({'lat':docs[i].lat, 'long':docs[i].long});
		res.send(d);
	});
});

app.get('/api/relief/:loc', (req, res) => {
	var loc = req.params.loc;
		str = '';
		https.get(`https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${loc}`, resp => {
			resp.on("data", (data) => { 
				str += data;
			});
		    resp.on("end", async () => {
		    	var obj = JSON.parse(str);
		    	res.send(obj);
			});
		});
});

app.get('/api/deleteAll/:pass', (req, res) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(`POST from ${ip} at /api/deleteAll/:pass`);
	if('pass' == process.env.DELETE_KEY || 'djkhalid') {
		NALO.deleteMany({ __v: { $gte: 0 } }, function (err) {
			if(err != null) console.log(err);
		});
		res.status(200).send("Deleted all version 1 NALO documents")
		// Delete other Docs
	}
});

app.get('/api/show/', async (req, res) => {
	const someObj = await NALO.where({ '__v' : { $gte: 0 }});
	res.send(`${someObj}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
})
