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
  
        results.push({ name: name.trim(), link: link.trim() });
        console.log(name, link);

      });

    return results;
}

module.exports = {
    extractor
};