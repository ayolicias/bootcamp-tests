describe ('totalPhoneBill', function(){
  it('should count the totalPhoneBill', function(){
  assert.equal(totalPhoneBill('call, sms, call, sms, sms' ),'R7.45');
  });

  it('check type', function(){
    assert.typeOf(totalPhoneBill('sms' ), 'string');
  });
});
