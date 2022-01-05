function anagramCounter(wordsArray) { // считает количесво анаграм в строке
	var counter = 0; 
	for(var i = 0; i< wordsArray.length; i++){
	  wordsArray.reduce((r, e)=> {
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

//=====================================================================

function pigIt(str){ // редактирует строку таким образом, что первую букву слова переносит в конец слова и после этого добавляет "ay" 
	var s  = ["!",",",".","'",'"',".","(",")"];
	console.log(str.split(" "));
	var arr = str.split(' ').reduce((r, e)=>{
	  if((s.indexOf(e[0]) >-1)&&(s.indexOf(e[e.length])> -1)){  
		 var k = e[0]+e.slice(1,2, e.length);
		e = k+e[1]+"ay"+e[e.length];
		 r = r+" "+e;
	
	  } else if((s.indexOf(e[0]) > -1)&&(e.length>1)){
		  var k = e[0]+e.slice(1,2); 
		  e = k+e[1] +"ay";
		  r = r +" "+e;
		 console.log(4);
	  } else if(s.indexOf(e[e.length])> -1){
		var k = e.slice(1,e.length);  
		e = k +e[0]+"ay"+e.length;
		 r = r +" "+ e;
		 console.log(3);
	  } else if((s.indexOf(e)>-1)&&(e.length == 1)){
		 r = r +" "+ e; 
		 console.log(2);
	  } else {
		 var k = e.slice(1); 
		 r = r +" "+ k + e[0] +"ay";
		 console.log(1);
	  }	
	  
	  return r;
	},"");
	return arr.split('').slice(1).reduce((res, el)=>{res=res+el; return res;},"");
}

//=====================================================================

function moveZeros(arr) { // все "0" отправляет в конец массива 
	return arr.reduce((r, e)=>{ e !== 0 ? r.push(e) : ""; return r }, []).concat(arr.reduce((r, e)=>{ e === 0 ? r.push(e) : ""; return r; },[]));
} 

 //=====================================================================

 function highAndLow(numbers){ // ищет минимальный и максимальный элемент в массиве
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

//====================================================
function sumIntervals(intervals) {
	// var finalArr = [];
	
	// intervals.forEach(e => {
	// 	finalArr.length = Math.max(finalArr.length, e[1]);
	// 	for(var i = e[0]; i<e[1]; ++i){
	// 		finalArr[i] = 1;

	// 	}
	// 	console.log(finalArr);
	// });
	
	// return finalArr.reduce((r, e)=>{ if(e != "empty") r= r+e; return r; },0);
	  
	finalArr = [];
	
	intervals.forEach(e => {
		for(var i = e[0]; i<e[1]; i++){
			finalArr.push(i);
		}
	});
  finalArr = [...new Set(finalArr)];
	return finalArr.length;
 }


//============================================================
//  3 единицы 1000 очков, 1 пятерка 50 очков и т.д всё рассписано в pints 
function score( dice ) {  // функция выводит количество набранных очков из массива
	var points =[[3, 1, 1000], [3,6,600], [3,5,500], [3,4,400],[3,3,300],[3,2,200],[1,1,100],[1,5,50]];
	var score = 0;
	var k = 0;
	var arr = new Array();
	for(var i=0; i< dice.length; i++){
		if(arr.indexOf(dice[i])==-1){
			arr.push(dice[i]);
			k = dice.reduce((r, e)=>{
				if(e == dice[i]){
					r++;
				}
				return r; 
			}, 0);
			points.forEach(([a, b, c])=>{
				if((a == k)&&(b==dice[i])){
			  		score = score + parseInt(c);
				}
			});
		}	
   }

	return score;
}	

//=======================================================
function multiplicationTable(size) { // выводит таблицу умножения
	var arr = [];
	for(var i = 0; i < size; i++){
		arr[i] = []; 
	  for(var j = 0; j< size; j++){
		 arr[i][j] = (i+1)*(j+1);
	  }
	}
	
	return arr; 
 }
 
