const express = require('express');
const router = express.Router();
const CrawlerAggregator = require('../aggregators/CrawlerAggregator')

const crawlerAggregator = new CrawlerAggregator();

router.get('/:term', async (req, res) => {
  const term = req.params.term;
  const order = req.query.order;

  const result = await crawlerAggregator.search(term, order);

  res.send(result);
});

module.exports = router;

