extractor = ($) => {

    let results = [];
    console.log('extracting');
    $('.listagem-box').each((i, elem) => {
        const link = $(elem)
          .find('.H-titulo a')
          .attr('href');
        const name = $(elem)
          .find('.H-titulo a')
          .text();
        const promotional_price = $(elem)
          .find('.listagem-preco')
          .text()
        const regular_price = $(elem)
          .find('.listagem-precoavista')
          .text()
        const photo = $(elem)
        .find('.listagem-img img')
        .attr('src')
  
        results.push({ name: name.trim(), link: link.trim(), price: { promotional_price, regular_price }, photo});
        console.log(name, link);

      });

    return results;
}

module.exports = {
    extractor
};