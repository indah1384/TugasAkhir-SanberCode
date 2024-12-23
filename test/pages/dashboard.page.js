const Page = require('./page'); 

class DashboardPage extends Page {  
    get DashboardPageUrl() {
        return 'https://kasiraja.ajikamaludin.id/dashboard';
    }

    async assertDashboardUrl() {
        await expect(browser).toHaveUrl(this.DashboardPageUrl);
    }
}

module.exports = new DashboardPage();  // Export an instance of DashboardPage
