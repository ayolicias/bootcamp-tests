function isFromBellville(regNumber){
var registration=regNumber.startsWith('CY');

return registration;
}
console.log(isFromBellville('CY123'));
