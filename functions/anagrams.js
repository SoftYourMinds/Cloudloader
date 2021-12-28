function anagrams(word, words) { //ищет все анаграмы слова в массиве и выводит их, если в массиве нет аннограм то выводит пустой массив

	var chek= new Array();
	var result = new Array();

	for(var i = 0; i < words.length; i++){
		if(words[i].length == word.length){
			
			chek[i] = word.split('').reduce((r, e )=>{
				if(words[i].indexOf(e) > -1){
					r.push('true');
				} else{
					r.push('false');
				}
				return r;
			},[]);

			if(chek[i].indexOf('false') == -1){
				result.push(words[i]);
			}
	}

 }
	return result;
}