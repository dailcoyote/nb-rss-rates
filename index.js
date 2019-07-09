const parser = require('rss-parser-browser');

function rssParseAndConvert(kztValue) {
    let rates = {};
    return new Promise(function(resolve, reject) {
        parser.parseURL('http://www.nationalbank.kz/rss/rates_all.xml', function(err, parsed) {
          if(err){
            //console.log(err);   // or Alert
            return reject(err);
          }
          //console.log(parsed.feed);
          parsed.feed.entries.forEach(function(entry) {
                if(entry.title === "RUB" || entry.title === "USD") {
                    rates[entry.title] = kztValue ? (kztValue / parseInt(entry.content)).toFixed(2) : parseInt(entry.content);
                }
          })
          return resolve(rates);  
        })
    })
}

module.exports = rssParseAndConvert;
