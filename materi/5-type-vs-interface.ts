// 1. type
type UserType = {
  nama: string;
  umur: number;
};

type ID = number | string;

type Status = "active" | "inactive";

// 2. Interface
interface UserInterface {
  nama: string;
  umur: number;
}

interface Admin extends UserInterface {
  role: string;
}

// CONTOH
// 1. Type
type ProductType = {
  name: string;
  price: number;
};

const itemType: ProductType = {
  name: "Laptop",
  price: 2_000_000,
};
console.log(itemType);

// 2. Interface
interface ProductInterface {
  name: string;
  price: number;
}

const itemInterface: ProductInterface = {
  name: "Computer",
  price: 10_000_000,
};
console.log(itemInterface);

// Declare Merging Interface
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Ucup",
  age: 20,
};

console.log(user);
