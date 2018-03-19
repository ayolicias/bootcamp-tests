function countRegNumber(regs){
var abc = regs.split(',');
return abc.length;
}
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328,CJ 812328,CJ 812328');
assert.equal(regCount, 5);

var regCount2 = countRegNumber('CY 523519,CJ 812328,CJ 812328,CJ 812328');
assert.equal(regCount2, 4);
