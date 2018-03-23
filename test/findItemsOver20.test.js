describe ('findItemsOver20', function(){
<<<<<<< HEAD

  var items=[{name : 'apples', qty : 10},
=======
  it('should count the itemListOver20 function', function(){
  assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
>>>>>>> b118190f765154f73d2bb9b6f947c6899a5d0703
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}];

    var result=[{'name' : 'bananas', 'qty' : 27}];

  it('should count the itemListOver20', function(){
  assert.deepEqual(findItemsOver20(items), result);
});
<<<<<<< HEAD

var items2=[{name : 'apples', qty : 37},
=======
it('should count items less than20 for itemListOver20 function ', function(){
assert.deepEqual(findItemsOver20([{name : 'apples', qty : 37},
>>>>>>> b118190f765154f73d2bb9b6f947c6899a5d0703
  {name : 'bananas', qty : 10},
  {name : 'pears', qty : 12}];

  var result2= [{'name' : 'apples', 'qty' : 37}];

it('should count items less than20', function(){
assert.deepEqual(findItemsOver20(items2),result2);
});
});
