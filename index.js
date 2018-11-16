// App Config
const config = require('./configurations/server');

// APIs
const fashion = require('./apis/fashion');

// Scraper
const request = require('request');
const cheerio = require('cheerio');

const in_url = 'https://www.reddit.com/r/javascript/';

let result = [];

// request(in_url, (err, res, body) => {
//   //Load HTML body into cheerio
//   const $ = cheerio.load(body);
//   $('.score').attr('title', (i, val) => {
//     result.push(val);
//     console.log(result)
//   });
// });

// // Getter from Front-end

// var hashtag = '';
// var output = '';