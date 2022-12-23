// Bài 1

function usd2vnd(amount) {
  return amount * 23000;
}

console.log("2 đô la Mĩ có giá trị" + usd2vnd(2) + "đồng");
console.log("10 đô la Mĩ có giá trị" + usd2vnd(10) + "đồng");

// Bài 2
function findArea(a, b) {
  return a * b;
}

console.log(
  "Hình chữ nhật có chiều rộng là 5, chiều dài là 7, có diện tích là",
  findArea(5, 7)
);

// Bài 3
function celsiusToFahrenheit(c) {
  return c * 1.8 + 32;
}

console.log("0 độ C tương ứng với" + celsiusToFahrenheit(0) + "độ Fahrenheit");

console.log(
  "32 độ C tương ứng với" + celsiusToFahrenheit(32) + "độ Fahrenheit"
);

console.log(
  "100 độ C tương ứng với" + celsiusToFahrenheit(100) + "độ Fahrenheit"
);

// Bài 4
function pow(a, b) {
  return Math.pow(a, b);
}

console.log("2 mũ 3 có kết quả là", pow(2, 3));
console.log("5 mũ 8 có kết quả là", pow(5, 8));

// Bài 5
function findAreaOfTriangle(a, b, c) {
  return Math.sqrt(
    ((a + b + c) / 2) *
      ((a + b + c) / 2 - a) *
      ((a + b + c) / 2 - b) *
      ((a + b + c) / 2 - c)
  );
}

console.log(
  "Hình tam giác có độ dài 3 cạnh lần lượt là 10,17,21 có diện tích là",
  findAreaOfTriangle(10, 17, 21)
);
