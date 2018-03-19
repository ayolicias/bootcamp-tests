function countAllFromTown(regNumber){
  console.log(regNumber);
var number =regNumber.split(',');
	var paarl=[];
  for (var i=0;i<number.length;i++){
 	if (number[i].startsWith('CL')){
    paarl.push(number[i]);

  }
  }
  return paarl.length;

}
