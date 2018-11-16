// App Config
const config = require('./configurations/server');

// APIs
const fashion = require('./apis/fashion');

// Scraper
const request = require('request');
const cheerio = require('cheerio');



request({
    method: 'GET',
    url: 'http://www.chictopia.com/browse/people'
}, (err, res, body) => {
    if (err) return console.error(err);

    let $ = cheerio.load(body);

    const links = [];
    const upvotes = [];

    $('.lg_photo img').each(function(i, elem) {
      links[i] = $(this).attr('src');
    });

    $(".lg_photo div[class='white px10']").each(function(i, elem){
        temp = $(this).text().match('[1-9][0-9]+ votes');
        upvotes[i] = temp[0];
    });
    console.log(links);
    console.log(upvotes);
})

console.log('end');

// Getter from Front-end

var hashtag = '';
var output = '';