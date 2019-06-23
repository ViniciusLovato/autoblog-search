const { TERABYTE_BASE_URL } = require('../service/constants');

extractor = ($) => {
    let results = [];
    $('.pbox').each((i, elem) => {
        const link = $(elem)
        .find('.commerce_columns_item_image a')
        .attr('href');
        const name = $(elem)
        .find('.commerce_columns_item_image a')
        .attr('title');
        const promotional_price = $(elem)
          .find('.commerce_columns_item_info .prod-new-price span')
          .text()
        const regular_price = $(elem)
          .find('.commerce_columns_item_info .prod-old-price  span')
          .text()
        const photo = $(elem)
          .find('.commerce_columns_item_image img')
          .attr('src')

        results.push({ name: name.trim(), link: TERABYTE_BASE_URL+link.trim(), price: { promotional_price, regular_price }, photo});
        console.log(name, link, photo);

    });

    return results;
}

module.exports = {
    extractor
};