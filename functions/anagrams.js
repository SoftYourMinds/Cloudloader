function anagrams(word, words) {
   var ter
	return words.reduce(function(res, e, index, array){
	
		if(words[index].length == word.length){
			search = e[index].split('');
	 		for(var i=0; i < word.length; i++){
				res = res +""+ word.split("").indexOf(search[i]) > -1 ? "true/" : "false/";
			}	
		
			
		}
		return res;
	 });
	 
	 
	 //result.split("").indexOf("true") ? true : false;
 }