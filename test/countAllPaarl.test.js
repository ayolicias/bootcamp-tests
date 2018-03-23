describe ('countAllPaarl', function(){
it('counts number of registration for countAllPaarl function', function(){
assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CJ 123'),3);
});

it('checks number of registration for countAllPaarl function', function(){
assert.equal(countAllPaarl('CJ 345 123, CJ 2345'),2);
});
});
