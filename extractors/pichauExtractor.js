extractor = ($) => {
    let results = [];
    $('.product-item').each((i, elem) => {
        const link = $(elem)
        .find('.product-item-name a')
        .attr('href');
        const name = $(elem)
        .find('.product-item-name a')
        .text();

        results.push({ name: name.trim(), link: link.trim() });
        console.log(name, link);
    });

    return results;
}

module.exports = {
    extractor
};