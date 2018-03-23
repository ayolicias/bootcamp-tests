describe ('totalPhoneBill', function(){
  it('should count the totalPhoneBill function', function(){
  assert.equal(totalPhoneBill('call, sms, call, sms, sms' ),'R7.45');
  });

  it('check type for totalPhoneBill function', function(){
    assert.typeOf(totalPhoneBill('sms' ), 'string');
  });
});
