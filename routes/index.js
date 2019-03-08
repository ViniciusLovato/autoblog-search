const express = require('express');
const router = express.Router();
const CrawlerAggregator = require('../service/CrawlerAggregator')

const crawlerAggregator = new CrawlerAggregator();

router.get('/:term', async (req, res) => {
  const term = req.params.term;

  const result = await crawlerAggregator.search(term);

  res.send(result);
});

module.exports = router;

