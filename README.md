# nb-rss-rates
Online currency converter from KZT to USD and RUB

## Installation

```javascript
npm install git+https://github.com/dailcoyote/nb-rss-rates.git --save
```

## Usage
```javascript
var nbRSSParser = require("nb-rss-rates");

const kztValue = 45000;
nbRSSParser(kztValue)
    .then((data) => console.log(data))  
    .catch((e) => console.log(e))
```

## Output
```javascript
{ USD: '117.19', RUB: '7500.00' }
```
