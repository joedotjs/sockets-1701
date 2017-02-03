var stockTicker = require('./stock-ticker');

stockTicker.on('newRating', function (info) {
    console.log(`Company: ${info.company}`);
    console.log(`Rating: ${info.rating}`);
});

stockTicker.on('newRating', function () {
    console.log('New rating!');
});

stockTicker.on('newRating', function (info) {
    var fs = require('fs');
    fs.appendFile('./stocks.txt', `Company: ${info.company}; Rating: ${info.rating}\n`);
});
