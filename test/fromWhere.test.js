describe ('fromWhere', function(){
  it('should return the town for fromWhere function', function(){
  assert.equal(fromWhere('CA'),'Cape Town');
  });

  it('check type for fromWhere function', function(){
    assert.typeOf(fromWhere('CJ' ),'paarl');
  });
});
