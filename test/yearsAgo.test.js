describe ('yearsAgo', function(){
it('returns how many yearsAgo that was', function(){
assert.equal(yearsAgo('2000'),'18');
});

it('check type', function(){
assert.typeOf(yearsAgo('2017'),'number');
});
});
