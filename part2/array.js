var mobil = ['Toyota', 'Honda', 'Suzuki', 'Daihatsu'];
console.log(mobil); // [ 'Toyota', 'Honda', 'Suzuki', 'Daihatsu' ]
console.log(mobil[0]); // Toyota

//menambahkan data baru
mobil.push('Mitsubishi');
console.log(mobil); // [ 'Toyota', 'Honda', 'Suzuki', 'Daihatsu', 'Mitsubishi' ]

//print semua data mobil
for (let i = 0; i < mobil.length; i++) {
    console.log("Mobil ke " + i + " adalah : " + mobil[i]);
}