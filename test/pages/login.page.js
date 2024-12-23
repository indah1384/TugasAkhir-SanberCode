import Page from './page'; 

class loginPage {
    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#root div div div div:nth-child(2) div button');  
    }

    get errorMsg() {
        return $('#root div div div div:nth-child(2) div div:nth-child(1)');
    }
        
    get profileButton() {
        return $('#menu-button-11'); 
    }

    get logoutButton() {
        return $('#menu-list-11-menuitem-14'); 
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async logout(profile,logout) {
    await this.profileButton.click(profile); 
    await this.logoutButton.click();  
    }

    async assertErrorMessage(expectedErrorMessage) {
        const errorText = await this.errorMsg.getText();
        expect(errorText).toContain(expectedErrorMessage); 
    }

    async getErrorMessage() {
        return this.errorMsg.getText();
    }
}
export default new loginPage()
module.exports = new loginPage();
