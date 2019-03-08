extractor = ($) => {
    let results = [];
    $('.pbox').each((i, elem) => {
        const link = $(elem)
        .find('.commerce_columns_item_image a')
        .attr('href');
        const name = $(elem)
        .find('.commerce_columns_item_image a')
        .attr('title');

        results.push({ name: name.trim(), link: link.trim() });
        console.log(name, link);
    });

    return results;
}

module.exports = {
    extractor
};