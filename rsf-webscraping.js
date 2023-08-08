const { remote } = require('webdriverio');
(async () => {
const browser = await remote({
    capabilities: {
    browserName: 'chrome'
    }
});

const url = 'https://safe.density.io/#/displays/dsp_956223069054042646?token=shr_o69HxjQ0BYrY2FPD9HxdirhJYcFDCeRolEd744Uj88e';

await browser.url(url);

const divElement = await browser.$('.styles_fullness__rayxl');
await divElement.waitForDisplayed({ timeout: 10000 });

const scrapedContent = await divElement.getText();

await browser.deleteSession();

const fs = require('fs');
const htmlTemplate = fs.readFileSync('profile-page.html', 'utf8');
const modifiedHtml = htmlTemplate.replace('<div id="scraped-content"></div>', `<div id="scraped-content">${scrapedContent}</div>`);
fs.writeFileSync('profile-page.html', modifiedHtml, 'utf8');
})();
