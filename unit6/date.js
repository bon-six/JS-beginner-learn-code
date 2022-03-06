
let today = new Date();
let day1 = new Date('December 17, 1995 03:24:00')
let day2 = new Date('1995-12-17T03:24:00')
let day3 = new Date(1995, 11, 17)            // the month is 0-indexed
let day4 = new Date(1995, 11, 17, 3, 24, 0)
let day5 = new Date(628021800000)            // passing epoch timestamp

console.log(day3);
console.log(day4);
console.log(day5);

console.log(day1);
console.log(day2);
console.log(day1 == day2);
console.log(day1.getFullYear() == day2.getFullYear());

const date = new Date();
const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log(month);
console.log(hour);


let date1 = new Date(98, 1)         // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
let date2 = new Date(22, 1)         // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
let date3 = new Date("2/1/22")      // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
date1.setYear(98); date1.toString()  // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date3.setYear(22); date3.toString()  // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
console.log(date1);
console.log(date3);


// Use the FullYear method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date1.setFullYear(98); date1.getFullYear()  // 98 (not 1998)
date3.setFullYear(22); date3.getFullYear()  // 22 (not 1922, not 2022)
console.log(date1.getFullYear());
console.log(date1);
console.log(date3.getFullYear());
console.log(date3);

// time difference
diff_ms = date1.getTime() - date2.getTime();
console.log(`time difference is ${diff_ms}`);