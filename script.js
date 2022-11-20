// DESTRUCTURING
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// // cara simple /lama
// // const JUMLAH = kalkulasi(2, 3)[0];
// // const KALI = kalkulasi(2, 3)[1];

// // cara destructuring
// // const [JUMLAH, KALI] = kalkulasi(2, 3);

// const [TAMBAH, KURANG, KALI, BAGI] = kalkulasi(2, 3);
// console.log(TAMBAH);
// console.log(KURANG);
// console.log(KALI);
// console.log(BAGI);

// cons = kalau array nama variabel di destructuring tidak bisa di acak urutuannya kalau di fungsi (di fungsi pertambahan namun di variable kita tulis kurang). solusi ubah jadi object

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kurang, kali } = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// DESTRUCTURE FUNCTION ARGUMENT
// cara biasa
const mhs1 = {
  nama: `Galih Arizza`,
  umur: 30,
  email: `email@email.com`,
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(nama, umur) {
//   return `Halo nama saya ${nama}, saya umur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// cara destructuring
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo nama saya ${nama}, saya umur ${umur} tahun. Dan nilai UAS saya ${uas}`;
}

console.log(cetakMhs(mhs1));
