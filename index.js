// Import package live-server
const liveServer = require("live-server");

// Konfigurasi untuk live-server
const params = {
  port: 8080, // Port dimana live-server akan dijalankan
  host: "0.0.0.0", // Menggunakan host 0.0.0.0 agar bisa diakses dari luar container
  root: ".", // Direktori root dari server
  open: true, // Tidak otomatis membuka browser
  file: "index.html", // File yang akan diload pertama kali
  wait: 100, // Waktu tunda untuk reload dalam milidetik
  logLevel: 2, // Menampilkan log detail
};

// Menjalankan live-server dengan parameter yang telah ditentukan
liveServer.start(params);