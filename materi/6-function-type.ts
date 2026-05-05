// 1. Typing Parameter
function greet(nama: string) {
  console.log("Hello, " + nama);
}
greet("Ucup");

// 2. Typing Return Value
function tambah(a: number, b: number): number {
  return a + b;
}

console.log(tambah(1, 2));
console.log(tambah(20, 10));

// 3. Type Inference (tanpa return type)
function kali(a: number, b: number) {
  return a * b;
}
console.log(kali(2, 4));

// 4. Optional Parameter
function greetUser(name: string, age?: number): void {
  if (age) {
    console.log(`${name} is ${age} years old`);
  } else {
    console.log(`Hello ${name}`);
  }
}
greetUser("Ucup", 20);
