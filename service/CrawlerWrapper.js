const Crawler = require('crawler');

class CrawlerWrapper {

    constructor(url, extractor) {
        this._url = url;
        this._extractor = extractor;
    }

    search(term, rateLimit = 1000) {
        
        return new Promise((resolve, reject) => {
            let results = [];

            const crawler = new Crawler({
                rateLimit: rateLimit,
                callback: (err, res, done) => {
                    console.log(`crawler target -> ${res.request.uri.href}`);
                    const $ = res.$;
                    results = this._extractor($);

                    done();
                    resolve(results);
                }
                
            })
    
            crawler.queue(this._url + term); 
        })
        
     
    }
}

module.exports = CrawlerWrapper;

