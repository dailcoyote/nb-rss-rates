const parser = require('rss-parser-browser');

const nbRSSParser = {
    loadFeed() {
        return new Promise(function (resolve, reject) {
            parser.parseURL('http://www.nationalbank.kz/rss/rates_all.xml', function (err, parsed) {
                if (err) return reject(err);
                else return resolve(parsed);
            })
        });
    },
    parseExchRates() {
        let rates = {};
        return new Promise((resolve, reject) => {
            this.loadFeed()
                .then((parsed) => {
                    parsed.feed.entries.forEach(function (entry) {
                        if (entry.title === "RUB" || entry.title === "USD") {
                            rates[entry.title] = parseFloat(entry.content);
                        }
                    })
                    return resolve(rates);
                })
                .catch(reject.bind(reject))
        })
    },
    calculateExchRates(kztValue = 0) {
        return new Promise((resolve, reject) => {
            this.parseExchRates()
                .then((rates) => {
                    for (const key in rates) {
                        rates[key] = parseFloat((kztValue / parseFloat(rates[key])).toFixed(2));
                    }
                    return resolve(rates);
                })
                .catch(reject.bind(reject))
        })
    }
}

module.exports = nbRSSParser;