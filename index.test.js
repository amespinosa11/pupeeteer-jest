const puppeteer = require('puppeteer');
const timeout = 7000;
describe(
    '/ (Home Page)',
    () => {
      let page;
      beforeAll(async () => {
        const browser = await puppeteer.launch() ;
        page = await browser.newPage();
        await page.goto('http://localhost:8080/register', {waitUntil: 'networkidle2'});
      }, timeout);

      it('Register Show Errors', async () => {
        await page.waitForSelector('form');
        
        await page.click('button');
        
        await page.waitForSelector('#required-firstname');
        await page.waitForSelector('#required-lastname');
        await page.waitForSelector('#required-username');
        await page.waitForSelector('#required-password');
        const html = await page.$eval('#required-firstname', el => el.innerHTML);
        const html2 = await page.$eval('#required-lastname', el => el.innerHTML);
        const html3 = await page.$eval('#required-username', el => el.innerHTML);
        const html4 = await page.$eval('#required-password', el => el.innerHTML);
        expect(html).toBe('First Name is required');
        expect(html2).toBe('Last Name is required');
        expect(html3).toBe('Username is required');
        expect(html4).toBe('Password is required');

      });
      
      it('Register Show Password min length', async () => {
        await page.waitForSelector('form');
        
        await page.waitForSelector('form');
        await page.click('input#firstname');
        await page.type('input#firstname', 'Ana');
        
        await page.click('input#lastname');
        await page.type('input#lastname','Espinosa');
        
        await page.click('input#username');
        await page.type('input#username','aespinosa');
        
        await page.click('input#password');
        await page.type('input#password','a');
        
        await page.click('button');

        await page.waitForSelector('.required-min');
        const html = await page.$eval('.required-min', el => el.innerHTML);
        expect(html).toBe('Password must be at least 6 characters');

      });

      it('Register Success', async () => {
        await page.waitForSelector('form');
        await page.click('input#firstname');
        await page.type('input#firstname', 'Ana');
        
        await page.click('input#lastname');
        await page.type('input#lastname','Espinosa');
        
        await page.click('input#username');
        await page.type('input#username','aespinosa');
        
        await page.click('input#password');
        await page.type('input#password','espinosa');
        
        await page.click('button');
        
        await page.waitForSelector('.alert-success');
        const html = await page.$eval('.alert-success', el => el.innerHTML);
        expect(html).toBe('Registration successful');

      });

      it('Close browser', async() => {
        await page.close();
      });

    }
  );