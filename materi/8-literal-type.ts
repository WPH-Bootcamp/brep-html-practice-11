// 1. Literal String
type Role = "admin";

let user: Role;
user = "admin";
user = "operator";

// 2. Literal Number
type Age = 20;

let ucup: Age;
ucup = 20;
ucup = 21;

// 3. Kombinasi dengan Union
type Status = "success" | "error" | "pending";
let order: Status;
order = "error";
order = "success";
order = "pending";

// 4. Function dengan Literal
function setRole(role: "admin" | "user") {
  console.log(role);
}
setRole("admin");
setRole("user");
setRole("operator");
