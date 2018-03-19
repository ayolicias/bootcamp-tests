describe ('transportFee', function(){
  it('should count the transportFee', function(){
  assert.equal(transportFee('morning'),'R20');
  });

  it('check type', function(){
    assert.typeOf(totalPhoneBill('morning' ), 'string');
  });
});
