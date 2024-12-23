const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page"); 
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");
const kategoriPage = require("../pages/kategori.page");

Given(/^I navigate to the Category menu$/, async () => {
    const pageInstance = new Page(); 
    await pageInstance.open('https://kasiraja.ajikamaludin.id');
    await loginPage.login('indahsitorus100@gmail.com', '12345678');
    await dashboardPage.assertDashboardUrl();
    const categoryMenu = await $('//*[@id="root"]/div/div/div[1]/div/a[5]');
    await categoryMenu.waitForClickable();
    await categoryMenu.click();            
});

When(/^I create a new category$/, async () => {
    await kategoriPage.addKategori('Makanan', 'Sosis');
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
}); 

When(/^I create a new category with blank data$/, async () => {
    await kategoriPage.addKategori('', '');
    await browser.pause(20000);
});

Then(/^I should see a Error message$/, async () => {
    const kategoriErrorMessage = await $('//*[@id="root"]/div/div/div/div[2]/div[2]/div[1]');
    if (!(await kategoriErrorMessage.isExisting())) {
        console.error('Elemen error tidak ditemukan di DOM.');
    }
    await browser.waitUntil(
        async () => (await kategoriErrorMessage.isDisplayed()), 
        {
            timeout: 10000, 
            timeoutMsg: 'Pesan error tidak muncul',
        }
    );
    const messageText = await kategoriErrorMessage.getText(); 
    console.log('Pesan error:', messageText);
    expect(messageText).toContain('"name" is not allowed to be empty');
}); 