function isWeekday(Monday){
 return Monday.endsWith('Monday');

}

assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Monday'), true);
