/* Given a string that represents time in hours and minutes, convert the string to
* military time (if necessary).
*/

const toMilitary = time => {

  let timeOnly = time.slice(0, time.length - 2).split(":");
  timeOnly.push(time.slice(time.length - 2));

  if (time.length === 5) return time;

  if (timeOnly[0] === '12' && time.slice(time.length - 2) === 'pm') return timeOnly[0] + ':' + timeOnly[1];
  if (time.slice(time.length - 2) === "pm" && timeOnly[0] !== '12') {
    return Number(timeOnly[0]) + 12 + ':' + timeOnly[1];
  } else if (time.slice(time.length === "am")) {
    if (timeOnly[0] < 12 && timeOnly[0] < 10) {
      return '0' + timeOnly[0] + ':' + timeOnly[1];
    } else if (timeOnly[0] < 12 && timeOnly[0] > 9) {
      return '' + timeOnly[0] + ':' + timeOnly[1];
    } else if (timeOnly[0] === '12') {
      return timeOnly[0] - 12 + '0' + ':' + timeOnly[1];
    }
  }
};


/*** Logging ***/
let time1 = "3:00pm";
let time2 = "9:15am";
let time3 = "12:00am";
let time4 = "04:00";
let time5 = "12:00pm";
let time6 = "15:00";

console.log(toMilitary(time1)); // 15:00
console.log(toMilitary(time2)); // 09:15
console.log(toMilitary(time3)); // 00:00
console.log(toMilitary(time4)); // 04:00
console.log(toMilitary(time5)); // 12:00
console.log(toMilitary(time6)); // 15:00

