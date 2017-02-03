var events = require('events');
var EventEmitter = events.EventEmitter;

var stockTicker = new EventEmitter();
module.exports = stockTicker;

setInterval(function () {
    var companies = ['APL', 'YHO', 'GOO'];
    stockTicker.emit('newRating', {
        company: companies[Math.floor(Math.random() * 3)],
        rating: Math.random()
    });
}, 500);