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

function pigIt(str){
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

 