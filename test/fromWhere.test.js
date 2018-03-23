describe ('fromWhere', function(){
<<<<<<< HEAD
  it('should count the transportFee for Cape Town', function(){
=======
  it('should return the town for fromWhere function', function(){
>>>>>>> b118190f765154f73d2bb9b6f947c6899a5d0703
  assert.equal(fromWhere('CA'),'Cape Town');
  });

  it('check town for fromWhere function', function(){
    assert.equal(fromWhere('CJ' ),'Paarl');
  });

  it('should count the transportFee for Paarl', function(){
  assert.equal(fromWhere('CJ'),'Paarl');
  });
});
