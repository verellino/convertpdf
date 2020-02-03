const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

(async function() {
    try{

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const html = fs.readFileSync('./templates/monthly.html', 'utf8');

        await page.setContent(html);
        await page.emulateMediaFeatures('screen');
        await page.pdf({
            path:'monthlyreport.pdf',
            format: 'A4',
            margin:{
                top: "5px",
                right: "10px",
                left: "10px",
                bottom: "5px"
            },
            printBackground: true
        });

        console.log('done');
        await browser.close();
        process.exit();

    }

    catch (e) {
        console.log('our error', e);
    }
})();