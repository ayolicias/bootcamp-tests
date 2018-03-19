describe ('countAllFromTown', function(){
it('counts number of registration for paarl', function(){
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'), 3);
});
it('counts number of registration for town', function(){
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'), 3);
});
});
