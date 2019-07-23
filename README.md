# nb-rss-rates
Online currency converter from KZT to USD and RUB

## Installation

```javascript
npm install git+https://github.com/dailcoyote/nb-rss-rates.git --save
```

## Usage

### With Calculate
```javascript
const nbRSSParser = require('./index');

const kztValue = 45000;
nbRSSParser.calculateExchRates(kztValue)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
```
### Output
```javascript
{ USD: 117.03, RUB: 7377.05 }
```

### With only parse
```javascript
const nbRSSParser = require('./index');

// Usage
nbRSSParser.parseExchRates()
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
```
### Output
```javascript
{ USD: 384.52, RUB: 6.1 }
```

