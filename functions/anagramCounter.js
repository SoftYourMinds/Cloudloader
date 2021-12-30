function anagramCounter(wordsArray) {
	var counter = 0; 
	for(var i = 0; i< wordsArray.length; i++){
	  wordsArray.reduce((r, e, j, array)=> {
			if((e != wordsArray[i])&&(e.length == wordsArray[i].length)){	
				if(wordsArray[i].split('').sort().reduce((res, el)=>{res = res + el; return res;}, "") == e.split('').sort().reduce((res, el)=>{res = res+el; return res;}, '')){
					counter++;
				}
				
			}
		
		}, "");
		console.log(wordsArray);
	}
	
	return counter/2;
}