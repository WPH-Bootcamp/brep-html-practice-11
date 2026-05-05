let names: string[] = ["Ucup", "Rendy", "Renday"];
console.log(names);

// Syntax Array Type
// 1. string[]
let alamat: string[] = ["Jl Untung Jawa", "Jl Suropati", "Jl in aja dulu"];

alamat.push("Jl ajah");
alamat.push(10);

// 2. number[]
let umur: number[] = [10, 20, 30];

// 3. Generic Type (Array<T>)
let kelas: Array<string> = ["javascript", "typescript"];

// 4. Union Type Array
let unionType: (number | string)[] = [10, "test", "jalan"];
