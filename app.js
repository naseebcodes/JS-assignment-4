// Logical AND (&&) operator task
let age = 24;
let fee = true;

if (age >= 18 && fee == true) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

// Logical OR (||) operator task
let emailCorrect = true;
let phoneCorrect = true;

if (emailCorrect == true || phoneCorrect == true) {
  console.log("Login is Successful Login");
} else {
  console.log("Something wrong Please correct your password and email");
}

// Logical OR (||) operator task
let isBlock = false;
if (isBlock !== false) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

//Combine Logical Operators
let isLogIn = true;
let isPremium = true;
let hasCoupon = true;

if ((isLogIn == true && isPremium == true) || hasCoupon == false) {
  console.log("Special Discount");
} else {
  console.log("No available Any Discount");
}
