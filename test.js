var webdriverio = require('webdriverio');
var user ='TESTINIUMUSER';
var key= 'YERTINIUMKEY';

client = webdriverio.remote({
    desiredCapabilities: {
        browserName: 'firefox',
        platform: 'WIN8_1',
        version: '46',
        recordsVideo:true,
        takesScreenshot:true,
        screenResolution:'XGA',
        key:user+':'+key
    },
        host: 'hub.testinium.io',
        port: 80,
}).init();

client
    .url('http://webdriver.io')
    .setValue('.ds-input', 'click')
    .click('.algolia-docsearch-suggestion--title')
    .pause(1000)
    .getTitle().then((title) => {
        console.log(title); // should return "WebdriverIO - click"
    })
    .end()
    .catch((e) => console.log(e));