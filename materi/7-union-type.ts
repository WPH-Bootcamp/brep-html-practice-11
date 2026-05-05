type Drink = "teh" | "kopi";
let order: Drink = "kopi";
console.log(order);

// 1. Union Basic (Primitive)
let id: string | number;
id = "12312131";
console.log(id);
id = 12312313;
console.log(id);

// 2. Union Literal
type Status = "success" | "pending" | "error";
let responsStatus: Status;

responsStatus = "error";
responsStatus = "pending";
responsStatus = "success";

// 3. Union di Function
function printId(id: number | string): number | string {
  return id;
}

// 4. Type Narrowing
function printIdNarrowing(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // ✅
  } else {
    console.log(id.toFixed(2)); // ✅
  }
}

// 5. Union Object
type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
