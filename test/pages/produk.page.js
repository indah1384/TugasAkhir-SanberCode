import Page from './page'; 

class produkPage extends Page {
    get namaKProdukInput() {
        return $('#nama');
    }

    get deskripsiPrrodukInput() {
        return $('#deskripsi');
    }
    get hargabeliProdukInput() {
        return $('//*[@id="harga beli"]');
    }

    get hargajualProdukInput() {
        return $('//*[@id="harga jual"]');
    }
    get stokProdukInput() {
        return $('#stok');
    }

    get kategoriProdukInput() {
        return $('#kategori');
    }
    get buttonSimpan() {
        return $('//*[@id="root"]/div/div/div/div[2]/div[2]/button');
    }
    get produkKlik(){
        return $('//*[@id="chakra-modal--body-1"]/div/a[6]')
    }
    get buttonTambah() {
        return $('//*[@id="root"]/div/div/div/div[2]/div[2]/a');
    }
    
    async addProduk(nama, deskripsi, hargabeli,hargajual,stok,kategori) {
        await this.buttonTambah.click();
        await this.namaKProdukInput.setValue(nama);
        await this.deskripsiPrrodukInput.setValue(deskripsi);
        //await this.hargabeliProdukInput.click();
        await this.hargabeliProdukInput.setValue(hargabeli);
        //await this.hargajualProdukInput.click();
        await this.hargajualProdukInput.setValue(hargajual);
        await this.stokProdukInput.setValue(stok);
        await this.kategoriProdukInput.click();
        const kategoriProduk = await $('//td[contains(text(), "Makanan")]');
        await kategoriProduk.waitForClickable();
        await kategoriProduk.click();
        await this.buttonSimpan.click();
    }

}
export default new produkPage()
module.exports = new produkPage();
