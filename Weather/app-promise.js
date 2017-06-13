const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
      }  
    })
    .help()
    .alias('help','h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoCodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find that address');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/3140f1ee8cb6e894c2448ef1b81a89b7/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address); 
  return axios(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemp = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemp}`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND')
    console.log('Unable to connect to API Servers');
  else
    console.log(e.message);
});
