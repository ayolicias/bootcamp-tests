describe ('countAllFromTown', function(){
it('counts number of registration for countAllFromTown function', function(){
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'), 3);
});
it('check type of registration for countAllFromTown function', function(){
assert.typeOf(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'), 3);
});
});
