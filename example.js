const nbRSSParser = require('./index');

// Usage
const kztValue = 45000;
nbRSSParser.calculateExchRates(kztValue)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))

// Usage
nbRSSParser.parseExchRates()
    .then((data) => console.log(data))
    .catch((e) => console.log(e))