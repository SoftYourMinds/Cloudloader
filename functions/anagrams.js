function anagrams(word, words) {
   result= "";
	return words.reduce(function(res, e, index, array){
	
		if(words[index].length == word.length){
			search = e[index].split('');
	 		for(var i=0; i < word.length; i++){
				// res = res +""+ word.split("").indexOf(search[i]) > -1 ? "true/" : "false/";
				if(word.split("").indexOf(search[i]) > -1){
					res = res + "true/";
				} else{
					res = res +"false/";
				}
			}
			
		} else{
			res = res+"false/";
		}
		console.log(res);
		return res.split("").indexOf("true") ? true : false;
	
	 },"");
	 
	 
	//  result.split("").indexOf("true") ? true : false;
 }