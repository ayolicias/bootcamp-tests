describe ('findItemsOver20', function(){
  it('should count the itemListOver20', function(){
  assert.equal(findItemsOver20('apples', 'pears','bananas', 'apples'),25);
  });
});
