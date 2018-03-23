describe ('transportFee', function(){
  it('should count the transportFee function', function(){
  assert.equal(transportFee('morning'),'R20');
  });

  it('check type for transportFee function ', function(){
    assert.typeOf(totalPhoneBill('morning' ), 'string');
  });
});
