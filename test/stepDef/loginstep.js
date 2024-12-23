const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page"); 
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");


Given(/^I open KasirAja website$/, async () => {
    const pageInstance = new Page();
    await pageInstance.open('https://kasiraja.ajikamaludin.id');
});


When(/^I login with valid credentials$/, async () => {
    await loginPage.login('indahsitorus100@gmail.com', '12345678');
});

Then(/^I should be on the Dashboard page$/, async () => {
    await dashboardPage.assertDashboardUrl();
});



When(/^I login with (.+) and (.+)$/, async (email, password) => {
    console.log('Logging in with:', email, password);
    await loginPage.login(email, password); 
    const buttonlogin1 = await $('//*[@id="root"]/div/div/div/div[2]/div/button');
    await buttonlogin1.waitForClickable();
    await buttonlogin1.click();
});

Then('I should see an error message', async () => {
    console.log('Waiting for error message...');

    const errorXPath = '//*[@id="root"]/div/div/div/div[2]/div/div[1]'; 
    let errorMessage = '';

    try {
        await browser.waitUntil(
            async () => {
                const errorElement = await $(errorXPath);
                return errorElement && (await errorElement.isDisplayed());
            },
            {
                timeout: 5000,
                timeoutMsg: 'Error message did not appear within 5 seconds',
            }
        );

       
        errorMessage = await $(errorXPath).getText();
        console.log('Received Error Message:', errorMessage);

        if (errorMessage.includes('"email" must be a valid email')) {
            expect(errorMessage).toBe('"email" must be a valid email');
        } else if (errorMessage.includes('Kredensial yang Anda berikan salah')) {
            expect(errorMessage).toBe('Kredensial yang Anda berikan salah');
        } else {
            throw new Error(`Unexpected error message: ${errorMessage}`);
        }
    } catch (err) {
        console.error('Error while checking error message:', err.message);
        throw err;
    }
});




