const prompt = require('prompt-sync')({sigint: true});

var ulangi = prompt("Apakah Anda ingin mengulang? (ya/tidak) ");
console.log("Anda memasukkan: " + ulangi);
var counter = 0;

while (ulangi === "ya") {
    counter++;
    ulangi = prompt("Apakah Anda ingin mengulang? (ya/tidak) ");
    console.log("Anda memasukkan: " + ulangi);
}
console.log("Anda telah mengulang sebanyak " + counter + " kali.");
console.log("Terima kasih sudah menggunakan aplikasi ini!");