describe ('fromWhere', function(){
  it('should count the transportFee', function(){
  assert.equal(fromWhere('CA'),'Cape Town');
  });

  it('check type', function(){
    assert.typeOf(fromWhere('morning' ), 'string');
  });
});
