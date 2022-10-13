let myDate1 = new Date(655, 0, 1, 4, 56, 39, 676); // winter
let myDate2 = new Date(866, 2, 10, 12, 53, 10, 825); // spring
let myDate3 = new Date(2455, 5, 24, 5, 17, 19, 809); // summer
let myDate4 = new Date(83, 9, 25, 16, 20, 23, 544); // fall


function getSeason(date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    return 'Unable to determine the time of year!';
  } else {
    let month = date.getMonth();
    if (month == 11 || month == 0 || month == 1 ) {
      return 'winter';
    } else if (month >= 2 && month < 5) {
      return 'spring';
    } else if (month >= 5 && month < 8) {
      return 'summer';
    } else if (month >=8 && month < 11) {
      return 'fall';
    } else {
      return 'Invalid date!';
    }
  }
}

let a = getSeason('foo');
console.log(a);