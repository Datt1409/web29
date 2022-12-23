let x = 5,
  y = 4;
let result = "";
for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    result += "* ";
  }
  //Xuống dòng khi hết vòng lặp bên trong
  result += "\n";
}

//Xuống 2 dòng sang hình khác
result += "\n\n";

for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    if (i == 0 || i == x - 1) {
      result += "* ";
    } else {
      if (j == 0 || j == y - 1) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
  }
  result += "\n";
}
//Xuống 2 dòng sang hình khác
result += "\n\n";

x = y = 7;
for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    if (j == i || j == y - i - 1) {
      result += "*";
    } else {
      result += " ";
    }
  }
  result += "\n";
}

//Xuống 2 dòng sang hình khác
result += "\n\n";
x = y = 4;
for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    if (j <= i) {
      result += "* ";
    } else {
      result += "  ";
    }
  }
  result += "\n";
}

console.log(result);
