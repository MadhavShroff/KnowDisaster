// Twilio Credentials
const accountSid = 'AC5ef872f6da5a21de157d80997a64bd33';
const authToken = 'your_auth_token';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
    to: '+16518675309',
    from: '+14158141829',
    body: "Tomorrow's forecast in Financial District, San Francisco is Clear",
    mediaUrl: 'https://climacons.herokuapp.com/clear.png',
  })
  .then((message) => console.log(message.sid));