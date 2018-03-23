describe ('transportFee', function(){
<<<<<<< HEAD
  it('check which shift for transportFee function', function(){
  assert.equal(transportFee('morning'),'R20');
  });

  it('check type shift for transportFee function ', function(){
    assert.typeOf(transportFee('morning' ), 'string');
  });
  it('check which shift for afternoon transportFee function ', function(){
    assert.equal(transportFee('afternoon' ), 'R10');
=======
  it('should count the transportFee function', function(){
  assert.equal(transportFee('morning'),'R20');
  });

  it('check type for transportFee function ', function(){
    assert.typeOf(totalPhoneBill('morning' ), 'string');
>>>>>>> b118190f765154f73d2bb9b6f947c6899a5d0703
  });
});
