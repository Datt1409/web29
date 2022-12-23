/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else if (c >= a && c >= b) {
    return c;
  }
}

console.log("Trong 3 số 11, 22, 33, số lớn nhất là", maxOfThree(11, 22, 33));

/**
 * Tìm mùa tương ứng với tháng
 *
 * - Winter (mùa đông): 12, 1, 2
 * - Spring (mùa xuân): 3, 4, 5
 * - Summer (mùa hạ): 6, 7, 8
 * - Fall (mùa thu): 9, 10, 11
 *
 * @param {number} month Tháng trong năm
 *
 * @return {'Winter' | 'Spring' | 'Summer' | 'Fall'} Mùa tương ứng với tháng
 */
function findSeason(month) {
  if (month == 12 || month == 1 || month == 2) return "Winter";
  if (month == 3 || month == 4 || month == 5) return "Spring";
  if (month == 6 || month == 7 || month == 8) return "Summer";
  if (month == 9 || month == 10 || month == 11) return "Fall";
}

console.log("Tháng 9 rơi vào mùa", findSeason(9));

/**
 * Kiểm tra xem một năm có phải năm nhuận hay không
 *
 * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không chia hết cho `100`,
 * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận nếu nó cũng chia hết cho `400`
 *
 * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
 * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
 * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
 *
 * @param {number} year Năm bất kỳ
 *
 * @return {boolean} Năm này có phải năm nhuận hay không
 */
function isLeafYear(year) {
  if ((year % 4 == 0) & (year % 100 != 0)) {
    return true;
  } else if (year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Năm 2040 có phải là năm nhuận không ?", isLeafYear(2040));
console.log("Năm 3999 có phải là năm nhuận không ?", isLeafYear(3999));
/**
 * Tìm số ngày trong tháng
 *
 * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
 * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
 * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
 *
 * @param {number} month Tháng bất kỳ
 * @param {number} year Năm bất kỳ
 *
 * @return {number} Số ngày trong tháng đó
 */
function findDayOfMonth(month, year) {
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  )
    return 31;

  if (month == 4 || month == 6 || month == 9 || month == 11) return 30;

  if (month == 2 && isLeafYear(year)) {
    return 29;
  } else {
    return 28;
  }
}

console.log("Tháng 2 năm 2033 có " + findDayOfMonth(2, 2033) + " " + "ngày");

/**
 * Xếp loại sinh viên theo số điểm trung bình
 *
 * - Nếu điểm trung bình < 4.0 thì xếp loại 'F'
 * - Nếu điểm trung bình < 5.5 thì xếp loại 'D'
 * - Nếu điểm trung bình < 7.0 thì xếp loại 'C'
 * - Nếu điểm trung bình < 8.5 thì xếp loại 'B'
 * - Nếu điểm trung bình từ 8.5 đến 10 thì xếp loại 'A'
 *
 * @param {number} point Điểm trung bình của sinh viên
 *
 * @return {'A' | 'B' | 'C' | 'D' | 'F'} Xếp hạng tốt nghiệp của sinh viên
 */
function calcGrade(point) {
  if (point <= 4.0) {
    return "F";
  }
  if (point <= 5.5) {
    return "D";
  }
  if (point <= 7.0) {
    return "C";
  }
  if (point <= 8.5) {
    return "B";
  }
  if (point <= 10) {
    return "A";
  }
}

console.log("Điểm trung bình kì này của tôi là 9.0, xếp hạng", calcGrade(9.0));

/**
 * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
 *
 * - Phí mở cửa cố định là `10.000đ`
 * - Giá cho `30km` đầu tiên là `11.000đ/km`
 * - Từ kilomet thứ `31` giá là `9.500đ/km`
 * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
 *
 * @param {number} km Số kilomet đã di chuyển
 *
 * @return {number} Số tiền phải trả
 */

function calcTaxiFee(km) {
  if (km <= 30) return 10000 + 11000 * km;
  if (km >= 31) return 10000 + 11000 * 30 + (km - 30) * 9500;
}

console.log(
  "Tiền cước taxi cho khách sau khi di chuyển 40km là",
  calcTaxiFee(40)
);
/**
 * Tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0
 *
 * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
 * - Nếu phương trình vô nghiệm thì trả về `null`
 * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
 * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
 *
 * @param {number} a Tham số a
 * @param {number} c Tham số c
 * @param {number} b Tham số b
 *
 * @return {number | [number, number] | null} Nghiệm phương trình
 */
function solveEquation(a, b, c) {
  const delta = Math.pow(b, 2) - 4 * a * c;

  if (delta < 0) return null;
  if (delta == 0) return -1 * (b / (2 * a));
  if (delta > 0)
    return [
      (-1 * b + Math.sqrt(delta)) / (2 * a),
      (-1 * b - Math.sqrt(delta)) / (2 * a),
    ];
}

console.log(
  "Phương trình bậc 2: 4x^2 - 2x - 6 = 0 có nghiệm là",
  solveEquation(4, -2, -6)
);

console.log(
  "Phương trình bậc 2: 3x^2 + 2x + 5 = 0 có nghiệm là",
  solveEquation(3, 2, 5)
);

console.log(
  "Phương trình bậc 2: x^2 - 4x +4 = 0 có nghiệm là",
  solveEquation(1, -4, 4)
);
