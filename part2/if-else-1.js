const prompt = require ('prompt-sync')({sigint: true}); 

const password = prompt("Masukkan password: ");
const validPassword = "password";

if (password === validPassword) {
    console.log("Selamat datang Bos!");
} else {
    console.log("Password salah, coba lagi!");
}
console.log("Terima kasih sudah menggunakan aplikasi ini!");
