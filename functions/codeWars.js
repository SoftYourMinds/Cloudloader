function anagramCounter(wordsArray) { // считает количесво анаграм в строке
	var counter = 0;
	for (var i = 0; i < wordsArray.length; i++) {
		wordsArray.reduce((r, e) => {
			if ((e != wordsArray[i]) && (e.length == wordsArray[i].length)) {
				if (wordsArray[i].split('').sort().reduce((res, el) => { res = res + el; return res; }, "") == e.split('').sort().reduce((res, el) => { res = res + el; return res; }, '')) {
					counter++;
				}

			}

		}, "");
		console.log(wordsArray);
	}

	return counter / 2;
}

//=====================================================================

function pigIt(str) { // редактирует строку таким образом, что первую букву слова переносит в конец слова и после этого добавляет "ay" 
	var s = ["!", ",", ".", "'", '"', ".", "(", ")"];
	console.log(str.split(" "));
	var arr = str.split(' ').reduce((r, e) => {
		if ((s.indexOf(e[0]) > -1) && (s.indexOf(e[e.length]) > -1)) {
			var k = e[0] + e.slice(1, 2, e.length);
			e = k + e[1] + "ay" + e[e.length];
			r = r + " " + e;

		} else if ((s.indexOf(e[0]) > -1) && (e.length > 1)) {
			var k = e[0] + e.slice(1, 2);
			e = k + e[1] + "ay";
			r = r + " " + e;
			console.log(4);
		} else if (s.indexOf(e[e.length]) > -1) {
			var k = e.slice(1, e.length);
			e = k + e[0] + "ay" + e.length;
			r = r + " " + e;
			console.log(3);
		} else if ((s.indexOf(e) > -1) && (e.length == 1)) {
			r = r + " " + e;
			console.log(2);
		} else {
			var k = e.slice(1);
			r = r + " " + k + e[0] + "ay";
			console.log(1);
		}

		return r;
	}, "");
	return arr.split('').slice(1).reduce((res, el) => { res = res + el; return res; }, "");
}

//=====================================================================

function moveZeros(arr) { // все "0" отправляет в конец массива 
	return arr.reduce((r, e) => { e !== 0 ? r.push(e) : ""; return r }, []).concat(arr.reduce((r, e) => { e === 0 ? r.push(e) : ""; return r; }, []));
}

//=====================================================================

function highAndLow(numbers) { // ищет минимальный и максимальный элемент в массиве
	var max = numbers.reduce(function (res, e) {
		res = res < e ? res = e : res;
		return res;
	}, numbers[0]);

	var min = numbers.reduce(function (res, e) {
		res = res > e ? res = e : res;
		return res;
	}, numbers[0]);

	return min + " " + max;
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
	//------------- 
	// 	finalArr = [];

	// 	intervals.forEach(e => {
	// 		for(var i = e[0]; i<e[1]; i++){
	// 			finalArr.push(i);
	// 		}
	// 	});
	//   finalArr = [...new Set(finalArr)];
	// 	return finalArr.length;



	// var finalArr = [];
	//  for(var i = 0; i<intervals.length; i++){
	// 	 for(var j = intervals[i][0]; j< intervals[i][1]; j++){
	// 		finalArr[j] = 1;

	// 	 }
	//  }

	// var counter = 0;
	// for(var i =0; i<finalArr.length; i++){
	// 	if(finalArr[i] == 1){
	// 		counter++;
	// 	}
	// }
	//  return counter;



	// finalArr = 	intervals.reduce((r,e) => {
	// 	intervals.reduce((res, el)=>{

	// 	},1)
	// 	for(var i = e[0]; i<e[1]; i++){
	// 		r[i] = 1;
	// 	}
	// 	return r;
	// },[]);


	// return finalArr.reduce((r, e)=>{ if(e != "empty") r= r+e; return r; },0);

	//-------------------------------------------------------
	//cool 
	let sum = 0, max = -Infinity;
	const sortedIntervals = intervals.sort(([a, b], [c, d]) => a == c ? b - d : a - c);
	for (const [start, stop] of sortedIntervals) {
		if (max < start)
			max = start;
		if (max < stop)
			[max, sum] = [stop, sum + stop - max]
	}
	return sum;
}


//============================================================
//  3 единицы 1000 очков, 1 пятерка 50 очков и т.д всё рассписано в pints 
function score(dice) {  // функция выводит количество набранных очков из массива
	var points = [[3, 1, 1000], [3, 6, 600], [3, 5, 500], [3, 4, 400], [3, 3, 300], [3, 2, 200], [1, 1, 100], [1, 5, 50]];
	var score = 0;
	var k = 0;
	var arr = new Array();
	for (var i = 0; i < dice.length; i++) {
		if (arr.indexOf(dice[i]) == -1) {
			arr.push(dice[i]);
			k = dice.reduce((r, e) => {
				if (e == dice[i]) {
					r++;
				}
				return r;
			}, 0);
			points.forEach(([a, b, c]) => {
				if ((a == k) && (b == dice[i])) {
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
	for (var i = 0; i < size; i++) {
		arr[i] = [];
		for (var j = 0; j < size; j++) {
			arr[i][j] = (i + 1) * (j + 1);
		}
	}

	return arr;
}


//==============
function likes(names) { // who like it in codewars
	return names.reduce((r, e) => {
		if (names.length == 0) {
			r = "no one likes this";
		} else if (names.length == 1) {
			r = e + " likes this";
		} else if (names.length == 2) {
			r = names[0] + " and " + names[1] + "like this";
		} else if (names.length == 3) {
			r = names[0] + ", " + names[1] + " and " + names[2] + " like this";
		} else {
			//   r =  parseInt(names[0]) +", "+ parseInt(names[1])+ " and " + parseInt(names.length)-2+ " others like this";

			r = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
		}

		return r;
	}, "no one likes this");
}

//===========================================
function comp(a1, a2) {
	var chek;
	a1 = a1.reduce((r, e, i, array) => {
		r[i] = parseInt(e) * parseInt(e);
		return r;
	}, []);

	return a1.length == a2.length && a1.sort().every((v, i) => v === a2.sort()[i]) ? true : false;
}

//===============================

function firstFactorial(num) {  // 
	var f;
	for (var i = 1; i <= num; ++i) {
		f = parseInt(f) * parseInt(i);
	}
	return f;

}


//================================
//Wave Sorting
function waveSort(arr) {
	var finalArr = [];
	var k = arr.length;
	for (var i = 1; i <= k; i++) {
		if (i % 2 != 0) {
			finalArr.push(parseInt(Math.min.apply(null, arr)));
			var newArr = arr.slice(arr.indexOf(Math.min.apply(null, arr)));
			console.log(newArr);
		}
		else {
			var max = arr.filter((e) => parseInt(e) > parseInt(Math.min.apply(null, arr)));

			finalArr.push(parseInt(Math.min.apply(null, max)));
			newArr
			arr.slice(arr.indexOf(parseInt(Math.min.apply(null, max))));
		}

	}
	return finalArr;
}

//========================================
//Array Addition

function arrayAddition(arr) {
	return arr.reduce((r, e) => {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			if ((arr[i] != parseInt(e)) && (arr[i] != Math.max.apply(null, arr))) {
				sum = sum + arr[i];

			}
			if (sum == parseInt(Math.max.apply(null, arr))) r = true;

		}

		return r == false ? false : true;
	}, false);
}

//======================

function wordReduction(str){ // AdvantISS
	while (true) {
		if (/ab|ba/.test(str) == true) {
			str = str.replace(/ba|ab/g, "c");
		}
		else if (/ac|ca/.test(str) == true) {
			str = str.replace(/ac|ca/g, "b");
		}
		else if (/bc|cb/.test(str) == true) {
			str = str.replace(/bc|cb/g, "a");
		}
		else {
			return str.length;
		}
	}
}

//============================
function rot13(str) { // символы юникода, с 65 до 97 стоят A-B a-b стоят с 97+ 
	// String.fromCharCode - декдит строку
	// String.charCodeAt возвращает зашифрованый в юникод символ 
	const alf = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
	const length = str.length;
	str = str.split("").reduce((r, e) => {
		r = r + "" +e + "~";
		return r;
	}, "");
	console.log("A".charCodeAt(0));
	console.log("a".charCodeAt(0));
	console.log(String.fromCharCode("c".charCodeAt(0)+13));

	// str.replace(/[a-z]/g, function(s){
	// 	return s <= "m" ? s+13
	// });
	// str =  alf.reduce((r, e, i, arr) => {
	//   var think =  i + 26 > arr.length ?  i + 26 - arr.length : i+26;
	//   let find = new RegExp(arr[i]+"~", "g");	
	//   r = find.test(r) == true ? r.replace(find, arr[think]+"&") : r;  
	//   console.log(r) 
	//   return r;
	// }, str);


	// return str.replace(/&/g, "");

	// return s.replace(/[A-Za-z]/g, function (c) {
	// 	return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(
	// 			 "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(c)
	// 	);
	//  } );

	// return str.replace(/[a-z]/ig, function(x){
	// 	return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
	//  });
 }

 //======================================================
 
 function solution(list){
// 	Формат для выражения упорядоченного списка целых чисел заключается в использовании списка, разделенного запятыми, либо

// отдельные целые числа
// или диапазон целых чисел, обозначенный начальным целым числом, отделенным от конечного целого числа в диапазоне дефисом «-». Диапазон включает все целые числа в интервале, включая обе конечные точки. Он не считается диапазоном, если он не охватывает как минимум 3 числа. Например "12,13,15-17"
// Завершите решение так, чтобы оно принимало список целых чисел в порядке возрастания и возвращало правильно отформатированную строку в формате диапазона.
	// let intervals = [];
	// let k = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	if ((arr[i - 1] == arr[i] - 1) && (arr[i] + 1 == arr[i + 1])) {
	// 		k = i + 1;
	// 		while (arr[k] + 1 == arr[k + 1]) {
	// 			k++;
	// 		}
	// 		intervals.push([i - 1, k]);
	// 		i = k + 1;
	// 	}
	// }
	// intervals.map(e => {
	// 	arr.splice(e[0], 1, arr[e[0]] + "-" + arr[e[1]]);
	// 	for (let i = e[0] + 1; i <= e[1]; i++) {
	// 		arr.splice(i, 1, "a");
	// 	}
	// });
	// arr = arr.reduce((r, e) => { e == "a" ? r.push(e) : ""; return r }, []).concat(arr.reduce((r, e) => { e != "a" ? r.push(e) : ""; return r; }, []));
	// return arr.join(",").replace(/a,/g, "");

	 list.reduce((acc, curr, i) => {
		 if (i == 0) return curr.toString();
		 if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
		 console.log(acc);
		 if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1) return acc + "-" + curr;
		 console.log(acc);
		 return acc + "," + curr;
	 });



// return list.reduce((r, e, i) =>{
// 	if(e == "k")  return r + "," + e;
	
// 	return r;
// });
 }

// function numberLetter(a, i) {
// 	let mas = [];
// 	i == 0 ? return "" : "";
// 	for(let k = 0; k < i; k++){
// 	  mas.push(a.toLowerCase());
// 	}
// 	return mas.join("");
//  }

function accum(s) { //repeat 
	s = s.split("").reduce((r, e, i) => {
		r = r + e.toUpperCase();
		while (i != 0) {
			i -= 1;
			r = r + e.toLowerCase();
		}
		r = r + "-";
		return r;
	}, "");
	return s.slice(0, s.length - 1);
}
//================================
// const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);

// =========================================
// spread operator 

// const sumMinElemets = (arr) => {
// 	return arr.reduce((r, e) => {
// 		return r + Math.min(...e);
// 	}, 0);
// }

// =====================
// sort 
function largestPairSum(numbers) {
	numbers.sort(function (a, b) { return b - a });
	return numbers[0] + numbers[1];
}

function comesAfter(str, l) {
	return str.split("").reduce((r, e, i, arr) => {
		console.log(arr[i], /\W|\d/.test(arr[i]));
		return r + (e.toLowerCase() == l.toLowerCase() && /[A-Z a-z]/.test(arr[i + 1]) == true && i + 1 < arr.length ? arr[i + 1] : "");
	}, "");
}

function wave(str) {

	return [...str].reduce((r, e, i, arr) => {
		e = str.split("");
		e[i] = arr[i].toUpperCase();
		r.push(e.join(""));
		return r;
	}, []);
	// var doubles = word.map(function(e) {
	// 	return splice;
	// });

	// console.log(k);
	// return str.split("").reduce((r, e, arr, i) => {
	//   word = [...str];
	//   word[i] = word[i].toUpperCase();
	//   r.push(word.join(""));
	//   return r; 
	// }, []);

	const wave = str => [...str].map((c, i) => `${str.slice(0, i)}${c.toUpperCase()}${str.slice(i + 1, str.length)}`).filter(s => /[A-Z]/.test(s))
}

//=====================

function removeConsecutiveDuplicates(s) {
	return s.split(filter((el, index, arr) => el != arr[index - 1]).join(" "));
}

//========================

function PlusMinus(num) {
	let allExp = [];
	if (getNumberSigns(num) != "not possible") {
		allExp = findAllExpressions(num, []);
		arrZeros = allExp.map(exp => {
			let arrZerosElement = [];
			let arr = exp.split("");
			for (let i = 0; i < arr.length; i++) {
				if ((arr[i] == "-") || (arr[i] == "+")) {
					arr[i + 1] = arr[i] == "-" ? arr[i - 1] - arr[i + 1] : parseInt(arr[i - 1]) + parseInt(arr[i + 1]);
				}
			}
			arr[arr.length - 1] == 0 ? arrZerosElement.push(exp.replace(/[0-9]/g, "")) : arrZerosElement.push("");
			return arrZerosElement;
		});
		arrZeros = arrZeros.filter(el => el != "");
		if (arrZeros.length == 0) return "not possible";
		else if (arrZeros.length == 1) return arrZeros[0].toString();
		else {
			let numberMinus = [];
			for (let i = 0; i < arrZeros.length; i++) {
				let count = 0;
				let j = 0;
				while (j != getNumberSigns(num)) {
					arrZeros[i][j] == "-" ? count++ : "";
					j++;
				}
				numberMinus.push(count);
			}
			return arrZeros[numberMinus.indexOf(Math.max.apply(null, numberMinus))].toString();
		}
	} else return "not possible";
}

const getRandomSign = () => { return Math.floor(Math.random() * 2) == 0 ? "+" : "-" }

const getNumberSigns = (num) => { return num.toString().split("").length - 1 == 0 ? "not possible" : num.toString().split("").length - 1 }

const getRandomExpression = (num, expLength) => {
	let exp = "";

	if (expLength != "not possible") {
		while (true) {
			if (exp.length != expLength) {
				exp = exp + getRandomSign();
			} else break;
		}
		arrSign = exp.split("");
		return num.toString().split("").reduce((res, el, index) => {
			let ifSignLast = arrSign[index] != undefined ? arrSign[index] : "";
			return res + el + ifSignLast;
		}, "");
	} else return expLength;
}

const findAllExpressions = (num, arrExp) => {
	let exp = getRandomExpression(num, getNumberSigns(num));
	if (arrExp.length != Math.pow(2, getNumberSigns(num))) {
		arrExp.includes(exp) == false ? arrExp.push(exp) : "";
		return findAllExpressions(num, arrExp);
	} else return arrExp;
}


 