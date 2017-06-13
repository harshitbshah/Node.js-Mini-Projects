const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve,reject) => {

    var encodedAddress = encodeURIComponent(address);

    request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(encodedAddress)}`,
    json : true
    },(error,response,body) => {
        if(!error && body.status === 'OK'){
            resolve({
                location: body.results[0].geometry.location
            });
        }
        else{
            reject('Unable to find that address');
        }
    });

    });
};
geocodeAddress('32608').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
}, (errMsg) => {
    console.log(errMsg);
});