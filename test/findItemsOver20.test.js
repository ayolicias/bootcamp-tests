describe ('findItemsOver20', function(){
  it('should count the itemListOver20 function', function(){
  assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]), [{'name' : 'bananas', 'qty' : 27}])
});
it('should count items less than20 for itemListOver20 function ', function(){
assert.deepEqual(findItemsOver20([{name : 'apples', qty : 37},
  {name : 'bananas', qty : 10},
  {name : 'pears', qty : 12}]), [{'name' : 'apples', 'qty' : 37}])
});
});
