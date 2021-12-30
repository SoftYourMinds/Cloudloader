function anagrams(word, words) { //ищет все анаграмы слова в массиве и выводит их, если в массиве нет аннограм то выводит пустой массив
var counter = new Array();
	words.reduce((r, e, j, array)=> {
	 if(word.length == e.length){	
		 if(word.split('').sort().reduce((res, el)=>{res = res + el; return res;}, "") == e.split('').sort().reduce((res, el)=>{res = res+el; return res;}, '')){
			 counter.push(e);
		 }
	 }
	 }, "");
 return counter;
}


	// var result = new Array();
	// for(var i = 0; i < words.length; i++){
	// 	if((words[i].length == word.length)&&(word != words[i])){
	// 		if((words[i].split('').sort().reduce((res, el)=>{res = res + el; return res;}, "") == (word.split('').sort().reduce((res, el)=>{res = res + el; return res;}, "")))){
	// 			result = result.push(words[i]);
	// 		}		
	// 	}
	// }	
 
	// return result;
	
// var chek= new Array();
// var result = new Array();

// for(var i = 0; i < words.length; i++){
// 	if((words[i].length == word.length)&&(word != words[i])){
		
// 		chek[i] = word.split('').reduce((r, e )=>{
// 			if(words[i].indexOf(e) > -1){
// 				r.push('true');
// 			} else{
// 				r.push('false');
// 			}
// 			return r;
// 		},[]);

// 		if(chek[i].indexOf('false') == -1){
// 			result.push(words[i]);
// 		}
// }

// }
// return result;

// var chek= new Array();
// var result = new Array();

// for(var i = 0; i < words.length; i++){
// 	if((words[i].length == word.length)&&(word != words[i])){
		
// 		chek[i] = word.split('').reduce((r, e )=>{
// 			if(words[i].indexOf(e) > -1){
// 				r.push('true');
// 			} else{
// 				r.push('false');
// 			}
// 			return r;
// 		},[]);

// 		if(chek[i].indexOf('false') == -1){
// 			result.push(words[i]);
// 		}
// }

