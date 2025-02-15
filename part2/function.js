function sayhello() {
  console.log('Hello');
}

function sayMultihello() {
    for(i = 0; i < 10; i++){
        sayhello();
    }
}
sayMultihello()

//fungsi dengan parameter
function sayMultihello(iter) {
    for(i = 0; i < iter; i++){
        sayhello();
    }
}
sayMultihello(2)

function kali(a, b) {
    hasilKali = a * b;
    console.log(hasilKali);
    return hasilKali;
}
//memanggil fungsi kali
var nilai1 = 3;
var nilai2 = 5;
var hasilPembagian = kali(nilai1, nilai2);

console.log(hasilPembagian); //200