function highAndLow(numbers){
	var max = numbers.reduce(function(res, e){
	  res = res < e ? res = e : res;
	  return res;
	}, numbers[0]);
	
	var min = numbers.reduce(function(res, e){
	  res = res > e ? res = e : res;
	  return res;
	}, numbers[0]);
	
	return  min+" "+max;
 }

//  function highAndLow(numbers){
// 	var numbersArray = numbers.split(" ");
	
// 	 var min = numbersArray[0];
// 	var max = numbersArray[0];
// 	for(var i = 0; i <numbers.length; i++){
// 	  if(min >  Number(numbersArray[i])){
// 		  min = Number(numbersArray[i]);
// 	  }
 
// 		if(max < Number(numbersArray[i])){
// 			max = Number(numbersArray[i]);       
// 		}
	
// 	}
// 	return max+" "+min;
//   }
 

// function highAndLow(numbers) {
// 	var arr = numbers.split(" ");
// 	return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
//  }

//  function highAndLow(numbers){
// 	numbers = numbers.split(' ');
// 	return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//  }


// function highAndLow(numbers){
// 	numbers = numbers.split(' ');
	
// 	return Math.max(...numbers) + ' ' + Math.min(...numbers);
//  }