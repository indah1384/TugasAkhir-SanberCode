import Page from './page'; 

class userPage extends Page {
    get namaKuserInput() {
        return $('#nama');
    }
    get buttonSimpan() {
        return $('//*[@id="root"]/div/div/div/div[2]/div[2]/button');
    }
    get userKlik(){
        return $('//*[@id="root"]/div/div/div[1]/div/a[7]')
    }
    get buttonTambah() {
        return $('//*[@id="root"]/div/div/div/div[2]/div[2]/a');
    }
    get emailuserinput(){
        return $('//*[@id="email"]')
    }
    get passworduserinput() {
        return $('//*[@id="password"]');
    }

    
    async addUser(nama,email,password) {
        //await this.userKlik.click();
        await this.buttonTambah.click();
        await this.namaKuserInput.setValue(nama);
        await this.emailuserinput.setValue(email);
        await this.passworduserinput.setValue(password);
        await this.buttonSimpan.click();
    }

}
export default new userPage()
module.exports = new userPage();
