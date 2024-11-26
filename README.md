# Nasıl Başlatılır?

## Server (API)

1. **`api` Klasörüne Git:**  
   Terminal veya komut satırında `api` klasörüne gidin.

2. **Sunucuyu Başlat:**  
   Aşağıdaki komutu çalıştırın:
   ```bash
   node server.js
   ```

---

## Client (Arayüz)

1. **Projenin Kök Dizinine Git:**  
   Terminal veya komut satırında projenin kök dizinine gidin.

2. **Uygulamayı Başlat:**  
   Aşağıdaki komutu çalıştırın:
   ```bash
   npm run dev
   ```

---

## Telefon ve Bilgisayardan Bağlanma

1. **IP Adresini Öğrenin:**  
   Komut satırında `ipconfig` yazarak bilgisayarınızın IP adresini öğrenin.

2. **IP Adresini Güncelleyin:**  
   **`page.js`** dosyasında bulunan `x.x` şeklindeki placeholder’ları kendi IP adresiniz ile değiştirin.

3. **Telefon ve Bilgisayarı Aynı Wi-Fi Ağına Bağlayın:**  
   Telefonunuzun ve bilgisayarınızın aynı yerel ağda (Wi-Fi) olduğundan emin olun.

4. **Bağlantıyı Test Edin:**  
   Telefonunuzun tarayıcısında, bilgisayarın IP adresini şu formatta girin:
   ```
   http://192.168.x.x:3000
   ```
   Bu adres üzerinden telefon ve bilgisayar arasında mesajlaşabilirsiniz.
