const CrawlerWrapper = require('../service/CrawlerWrapper');

const pichauExtractor = require('../extractors/pichauExtractor').extractor;
const kabumExtractor = require('../extractors/kabumExtractor').extractor;
const terabyteExtractor = require('../extractors/terabyteExtractor').extractor;


const { PICHAU_URL, KABUM_URL, TERABYTE_URL} = require('../service/constants');

class CrawlerAgreggator {

    constructor() {
        this._pichauCrawlerWrapper = new CrawlerWrapper(PICHAU_URL, pichauExtractor);
        this._kabumCrawlerWrapper = new CrawlerWrapper(KABUM_URL, kabumExtractor);
        this._terabyteCrawlerWrapper = new CrawlerWrapper(TERABYTE_URL, terabyteExtractor);
    }

  async search(term, order = 0) {
    const pichau = this._pichauCrawlerWrapper.search(term);
    const kabum = this._kabumCrawlerWrapper.search(term);
    const terabyte = this._terabyteCrawlerWrapper.search(term);

    const results = [...(await pichau), ...(await kabum), ...(await terabyte)];
    return this.sortResults(results);
  }

  sortResults(results) {
    const regex = /([0-9,.]+)/
    results.sort((first, second) => {
        const first_price = regex.exec(first.price.promotional_price) || [Infinity];
        const second_price = regex.exec(second.price.promotional_price) || [Infinity];
        
        return parseFloat(first_price[0]) - parseFloat(second_price[0]);
    })

    return results;

  }

}

module.exports = CrawlerAgreggator;

