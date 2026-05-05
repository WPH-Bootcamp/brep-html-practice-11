const user: {
  nama: string;
  umur: number;
  email?: string;
} = {
  nama: "Ucup",
  umur: 20,
  email: "ucup@gmail.com", // Tidak wajib karena ada optional property di type nya
};

console.log(user);
