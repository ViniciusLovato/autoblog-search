extractor = ($) => {
    let results = [];
    $('.product-item').each((i, elem) => {
        const link = $(elem)
        .find('.product-item-name a')
        .attr('href');
        const name = $(elem)
        .find('.product-item-name a')
        .text();
        const promotional_price = $(elem)
          .find('.price-boleto span')
          .text()
        const regular_price = $(elem)
          .find('.price')
          .text()
        const photo = $(elem)
          .find('.product-image-photo')
          .attr('src')


        results.push({ name: name.trim(), link: link.trim(), price: { promotional_price, regular_price }, photo});
        console.log(name, link);
    });

    return results;
}

module.exports = {
    extractor
};