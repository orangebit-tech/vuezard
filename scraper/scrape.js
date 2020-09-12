const request   = require('request');
const axios     = require('axios');
const cheerio   = require('cheerio');

// request('https://codes.iccsafe.org/content/FPC2017/chapter-3-general-regulations?site_type=public', (error, response, html) => {
//     if(!error && response.statusCode == 200) {
//         const $ = cheerio.load(html)
//         const price = $('#priceblock_ourprice').text()
//         // $('.titleSection').each((i, el) => {
//         //     const item = $(el).text()
//         //     console.log(item)
//         // })
//        console.log($('#text-id-11956077').html())
//     }
// })
const amznlink = 'https://www.amazon.com/Intel-i3-9100-Desktop-Processor-LGA1151/dp/B07RXW4Y2K'

const icclink = 'https://codes.iccsafe.org/content/FPC2017/chapter-3-general-regulations?site_type=public'

    axios.get(`${amznlink}`)
      .then((response)=> {
        const html = response.data;
        const $ = cheerio.load(html);
        

        // AMAZON
        const productName = $("#productTitle").html().replace(/\s\s+/g, '');
        const amznPrice = $("#priceblock_ourprice").text();
        const rating = $('#centerCol #acrPopover').text().replace(/\s\s+/g, '');
        const numReviews = $('#centerCol #acrCustomerReviewText').text().replace(/\s\s+/g, '');
        const prodImg = $('#landingImage').attr('data-old-hires');


        // ICC CODES
        const test = $('.level2').text()

        console.log(productName)
        // res.render("home", {
        //     productTitle: productName,
        //     price:amznPrice,
        //     prod_Img:prodImg,
        //     azLink:links,
        //     });
     

});