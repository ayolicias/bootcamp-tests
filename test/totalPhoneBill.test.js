describe ('totalPhoneBill', function(){
  it('should count the totalPhoneBill function', function(){
  assert.equal(totalPhoneBill('call, sms, call, sms, sms' ),'R7.45');
  });

<<<<<<< HEAD
  it('should count the totalPhoneBill', function(){
    assert.equal(totalPhoneBill('sms, call, sms, call, sms, call'), 'R10.20');
=======
  it('check type for totalPhoneBill function', function(){
    assert.typeOf(totalPhoneBill('sms' ), 'string');
>>>>>>> b118190f765154f73d2bb9b6f947c6899a5d0703
  });
});
