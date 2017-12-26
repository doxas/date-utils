
const du = window.DateUtils;

let d = Date.now();

console.log(d);
console.log(du.getUtcTime(d));

console.log(du.getTimeString(d));
console.log(du.getUtcTimeString(d));

