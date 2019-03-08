const CrawlerWrapper = require('../service/CrawlerWrapper');

const pichauExtractor = require('../extractors/pichauExtractor').extractor;
const kabumExtractor = require('../extractors/kabumExtractor').extractor;
const terabyteExtractor = require('../extractors/terabyteExtractor').extractor;


const { PICHAU_URL, KABUM_URL, TERABYTE_URL} = require('./constants');

class CrawlerAgreggator {

    constructor() {
        this._pichauCrawlerWrapper = new CrawlerWrapper(PICHAU_URL, pichauExtractor);
        this._kabumCrawlerWrapper = new CrawlerWrapper(KABUM_URL, kabumExtractor);
        this._terabyteCrawlerWrapper = new CrawlerWrapper(TERABYTE_URL, terabyteExtractor);
    }

    async search(term)  {
        const pichauResult = await this._pichauCrawlerWrapper.search(term);
        const kabumResult = await this._kabumCrawlerWrapper.search(term);
        const terabyteResult = await this._terabyteCrawlerWrapper.search(term);     

        return pichauResult.concat(kabumResult, terabyteResult)
    }
}

module.exports = CrawlerAgreggator;

