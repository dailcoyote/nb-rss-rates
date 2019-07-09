const nbRSSParser = require('./index');

// Usage
const kztValue = 45000;
nbRSSParser(kztValue)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
