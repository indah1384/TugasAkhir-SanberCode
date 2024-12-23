import Page from './page'; // Adjust the path as necessary

class kategoriPage extends Page {
    get namaKategoriInput() {
        return $('#nama');
    }

    get deskripsiKategoriInput() {
        return $('#deskripsi');
    }

    get buttonTambah() {
        return $('//*[@id="root"]/div/div/div/div[2]/div[2]/a');
    }

    get simpanButton() {
        return $('//*[@id="root"]/div/div/div/div[2]/div[2]/button');
    } 
    get kategoriklik() {
        return $('//*[@id="root"]/div/div/div[1]/div/a[5]');
    } 
    
    async addKategori(nama, deskripsi) {
        await this.kategoriklik.click(); 
        await this.buttonTambah.click();
        await this.namaKategoriInput.setValue(nama);
        await this.deskripsiKategoriInput.setValue(deskripsi);
        await this.simpanButton.click();
    }

}
export default new kategoriPage()
module.exports = new kategoriPage();
