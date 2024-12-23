const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page"); 
//const kategoriPage = require("../pages/kategori.page");
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");
const userPage = require("../pages/user.page");

Given(/^I navigate to the user menu$/, async () => {
    const pageInstance = new Page(); 
    await pageInstance.open('https://kasiraja.ajikamaludin.id');
    await loginPage.login('indahsitorus100@gmail.com', '12345678');
    await dashboardPage.assertDashboardUrl();
    const usermenu = await $('//*[@id="root"]/div/div/div[1]/div/a[7]');
    await usermenu.click();
});

When(/^I create a new user$/, async () => {
    await userPage.addUser('indah','indahtess@gmail.com','12345678');
});

Then(/^I should see a success message$/, async () => {
    const successMessage = await $('//div[contains(text(), "item ditambahkan")]'); 
    await browser.waitUntil(
        async () => (await successMessage.isDisplayed()), 
        {
            timeout: 5000, 
            timeoutMsg: 'Pesan sukses tidak muncul',
        }
    );
    const messageText = await successMessage.getText(); 
    console.log('Pesan sukses:', messageText);
    expect(messageText).toContain('item ditambahkan');
    await loginPage.logout();
})

When(/^I create a new user with blank 'email'$/, async () => {
    await userPage.addUser('indah','','12345678');
    await browser.pause(1000);
});

Then(/^I should see a Error message$/, async () => {
    const produkErrorMessage = await $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]'); 
    await browser.waitUntil(
        async () => (await produkErrorMessage.isDisplayed()), 
        {
            timeout: 10000, 
            timeoutMsg: 'Pesan error tidak muncul',
        }
    );
    const messageText = await produkErrorMessage.getText(); 
    console.log('Pesan error:', messageText);
    expect(messageText).toContain('"email" is not allowed to be empty');
}); 









