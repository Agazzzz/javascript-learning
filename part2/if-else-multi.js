const prompt = require('prompt-sync')({sigint: true}); 

const nilai = prompt("Masukkan nilai: ");
var grade;
grade = "";

if (nilai >= 90) {
    grade = "A";
} else if (nilai >= 80) {
    grade = "B";
} else if (nilai >= 70) {
    grade = "C";
} else if (nilai >= 60) {
    grade = "D";
} else {
    grade = "E";
}
console.log("Grade adalah: " + grade);