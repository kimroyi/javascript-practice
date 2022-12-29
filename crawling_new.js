/**
 * Node.js Puppeteer, Crawler coding #News
 * 쇼더코딩 Show the coding
 * https://youtu.be/LENypLTZxNg
 */
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const test = ($) => {
    const objs = [];
    $('.DWs4Q').each((idx, el) => {
        objs.push({
            'title': $(el).find('.place_bluelink ').text(),
            'review': $(el).find('.wt0BA').text()
        });
    });

    return objs;
};

const site = {
    'name': '검색',
    'url': 'https://search.naver.com/search.naver?where=nexearch&sm=tab_jum&query=',
    'filter': ($) => test($),
};

(async () => {

    const keyword = '건대피부과';
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();

    await page.goto(site.url + keyword, { 'waitUntil': 'networkidle0' });
    const rst = site.filter(cheerio.load(await page.content()));
    console.log('-----------------------------------------------');
    console.log(site.name);
    console.log(rst);
    console.log('-----------------------------------------------');

    // for await (const site of targets) {
    //     await page.goto(site.url + keyword, { 'waitUntil': 'networkidle0' });
    //     const rst = site.filter(cheerio.load(await page.content()));
    //     console.log('-----------------------------------------------');
    //     console.log(site.name);
    //     console.log(rst);
    //     console.log('-----------------------------------------------');
    // }

    await browser.close();
})();


// const naverNewsFilter = ($) => {
//     const objs = [];
//     $('.press_edit_news_item').each((idx, el) => {
//         objs.push({
//             'title': $(el).find('.press_edit_news_title').text(),
//             'link': $(el).find('.press_edit_news_link').attr('href'),
//         });
//     });

//     return objs;
// };

// const daumNewsFilter = ($) => {
//     const objs = [];
//     $('#mArticle > div.box_etc > ul > li').each((idx, el) => {
//         objs.push({
//             'title': $(el).find('.link_txt').text().split('\n')[0],
//             'link': $(el).find('.link_txt').attr('href'),
//         });
//     });

//     return objs;
// }

// const naverHaniInter = {
//     'name': '한겨레 - 세계',
//     'url': 'https://media.naver.com/press/028?sid=104',
//     'filter': ($) => naverNewsFilter($),
// };

// const naverHaniIt = {
//     'name': '한겨레 - IT',
//     'url': 'https://media.naver.com/press/028?sid=105',
//     'filter': ($) => naverNewsFilter($),
// };

// const naverHaniEco = {
//     'name': '한겨레 - 경제',
//     'url': 'https://media.naver.com/press/028?sid=101',
//     'filter': ($) => naverNewsFilter($),
// };

// const daumNewEco = {
//     'name': '다음 - 경제',
//     'url': 'https://news.daum.net/breakingnews/economic',
//     'filter': ($) => daumNewsFilter($),
// };

// (async () => {
//     const targets = [
//         naverHaniInter,
//         naverHaniIt,
//         naverHaniEco,
//         daumNewEco
//     ];

//     const browser = await puppeteer.launch();
//     const [page] = await browser.pages();

//     for await (const site of targets) {
//         await page.goto(site.url, { 'waitUntil': 'networkidle0' });
//         const rst = site.filter(cheerio.load(await page.content()));
//         console.log('-----------------------------------------------');
//         console.log(site.name);
//         console.log(rst);
//         console.log('-----------------------------------------------');
//     }

//     await browser.close();
// })();