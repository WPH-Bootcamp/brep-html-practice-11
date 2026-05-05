// -. Macam-macan types
// 1. String
let nama: string | null = "Dicky";
console.log(nama);

nama = null;
console.log(nama);

// 2. Number
let angka: number = 10;
angka = "sepuluh";
console.log(angka);

// 3. Boolean
let isLogin: boolean = true;

// 4. null
let kosong: null = null;

// 5. undefined
let belumAda: undefined = undefined;

// -. Type Annotation and Type Inference
// 1. Type Annotation
let alamat: string = "Jl Untung Jawa";

// 2. Type Inference -> Kemampuan Typescript membaca tipe data ketika tidak diinisialisasi
let umur = 10;
umur = "sepuluh";
console.log(umur);
