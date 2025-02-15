const prompt = require('prompt-sync')({sigint: true});

//Program penjumlahan
var num1 = prompt ("Masukkan nilai pertama: ");
var num2 = prompt ("Masukkan nilai kedua: ");

console.log("Hasil penjumlahan dari " + num1 + " + " + num2 + " = " + (parseInt(num1) + parseInt(num2)));