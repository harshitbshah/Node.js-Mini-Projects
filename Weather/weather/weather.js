const request = require('request');

var getWeather = (lat,lon,callback) => {
    request({
    url: `https://api.darksky.net/forecast/3140f1ee8cb6e894c2448ef1b81a89b7/${lat},${lon}`,
    json : true
    },(error,response,body) => {
    if(error)
      callback('Unable to conncect to Dark Sky Server');
    else if(response.statusCode === 400)
      callback('Unable to fetch weather');
    else if(response.statusCode === 200)
      callback(undefined, {
          currentTemp : body.currently.temperature,
          actualTemp : body.currently.apparentTemperature
      });
  });
}

module.exports.getWeather = getWeather;