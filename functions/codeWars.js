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

	//  list.reduce((acc, curr, i) => {
	// 	 if (i == 0) return curr.toString();
	// 	 if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
	// 	 console.log(acc);
	// 	 if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1) return acc + "-" + curr;
	// 	 console.log(acc);
	// 	 return acc + "," + curr;
	//  });
	 //[-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]


// return list.reduce((r, e, i) =>{
// 	if(e == "k")  return r + "," + e;
	
// 	return r;
// });
 }

//создать запрос который выведет пиб студента у которого БД и IC  предмет не закрыты  студенты у которых нет не единой работы  по предметам БД и ИС должы учитываться 2 варианта событий,  первый работ нет, второй работы есть но они ещё не оценены 

//создать запрос который выведет ПИБ преподавателей которые вели или ведут у студента баришова максима предметы 

//создать запрос который выведет ПИБ Студента у которого самый большой бал по дисцыплинам БД и ИС с лаб раб "ОДЗ" если таких студентов несколько то вівести того у которого работа сдана раньше
/*
1) я узнал что нужно фильтровать мысли и направлять их в позитивное русло 
отслеживать мысли в течении дня
заниматься визуализцией событий 
если сравнить мысли и лупу то лучи солнца что на неё светят это мы а лупа отображает то как мы думаем и как концентрируемься на цели, если 1000 мыслей направлять в одно русло то получится один большой поток мыслей, так как делает это лупа с лучами солнца
+ мне понравилось выражение про костёр и искры гд 2 это наши мысли они появляються в следствии роботы нашего мозга то есть горения костра и вылетают в виде искр и так же быстро исчезают 

метод утверждения, очень полезная штука менят твоё отношение к предстоящим задачам, соответсвенно с другим настроем выполняемость тоже будет другой(нужен позитивный настрой тогда будет позитивный результат)
успех влечет за собой новый успех 

нужно учится признавать свои достоинста и победы или нахоидть их для того что бы вызывать у себя чувство гордости и успеха 

подсознание это поле, которое выращивает семена наших мыслей каждое семено, каждая ситуация заложена в нашем и подсознании и наша реакция будет зависить от того какое мы семено заложили( если мысли были про то что я плохой собеседник то в подсознании выскочит это правило и мы так и будем вести себя в этой ситуации)
*/


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

//========================гандон проверять всё с некст коммента 

// 
/*
сначало нужно узнать число промежутков(слотов) между цифрами числа  
то есть место для + или - 
например если число состоит из 5 цифр то количество мест для знаков + - будет 4 (число 23456  2+3+4-5+6  знаков 4 цифр 5)
дальше нужно узнать число всех комбинаций
для каждого слота под знак есть 2 варианта подстановки либо + либо - 
таких подстановок в этом случае 4, и с помощью формулы 2*2*2*2 = узнаю количество всех возможных способов подстановки "+""-" в 5 значном число это будет 16 

Теперь я выбрал не самый лучший способ возможно, но по другому не знаю как :)
рандомно подбирать правильные значения

у меня  в коде рандомно будет генерирроваться какое то выражение)(+,-) и я его буду проверять со значениями которые уже генерировались 
если выражение новое записываем в массив есть нет то ничего не делаем 
и так до тех пор пока количество выражений не будет равняться количеству всех возможных комбинаций знаков в числе 

и останеться только узнать выражения которые равняються нулю если такие вообще будут 
а не так сложно как я думал во время тестового задания начале )

*/

function PlusMinus(num) {
	let allExp = [];
	if (getNumberSigns(num) != "not possible") {
		allExp = findAllExpressions(num, []);

		arrZeros = allExp.map(exp => {
			let arrZerosElement = exp.split("").reduce((result, element, i, arr) => {
				if ((arr[i] == "-") || (arr[i] == "+")) {
					arr[i + 1] = arr[i] == "-" ? arr[i - 1] - arr[i + 1] : parseInt(arr[i - 1]) + parseInt(arr[i + 1]);
				}
				return [arr.pop(), exp.replace(/[0-9]/g, "")];
			});
			return arrZerosElement;
		});

		arrZeros.reduce((element))

		return arrZeros;
	} else {
		return "not possible";
	}

}

// getRandomSing() - возвращает рандомно математический знак "+" или "-"

const getRandomSign = () => { return Math.floor(Math.random() * 2) == 0 ? "+" : "-" }

// getNumberSings() - Возращает количество "слотов под знаки" в числе ИЛИ not possible Если число состоит из одной цифры
// аргументом функции являеться число
// пример: дано число 231 => 2+3+1  количество знаков равно 2(+,+) функция возвращает 2
// пример: дано число 2 => количество знаков 0, функция возвращает not possible

const getNumberSigns = (num) => { return num.toString().split("").length - 1 == 0 ? "not possible" : num.toString().split("").length - 1 }

/* 
	getRandomExpression() возвращает рандомное выражение состоящие из "+","-"
	в аргументе функции число знаков  которое нужно получить 
			 пример: getRandomExpression(4) => "++-+" 
			 пример: getRandomExpression(2) => "++"
*/

const getRandomExpression = (num, expLength) => {
	let exp = "";
	if (expLength != "not possible") {
		while (true) {
			if (exp.length != expLength) {
				exp = exp + getRandomSign();
			} else {
				break;
			}
		}
		elArr = exp.split("");
		return num.toString().split("").reduce((res, el, index) => {
			let ifSignLast = elArr[index] != undefined ? elArr[index] : "";
			return res + el + ifSignLast;
		}, "");
	} else {
		return expLength;
	}
}

/* 
	findAllExpressions() - выводит массив всех возможных вариантов варажений 
	Аргументы функции - "num" число у которого мы хотим узнать количество возможных выражений 
								"arrExp" результирующий массив
	Примеры - findAllExpressions(12, []) => ['+', '-']
				 findAllExpressions(123, []) => ['+-', '++', '-+', '--']	 
	
	Как работает функция? 			 
		const findAllExpressions = (num, arrExp) => { 

			let exp = getRandomExpression(getNumberSigns(num));  // получаем вариант выражение которое должны получить из функции PlusMinus для числа "num"
			
			if(arrExp.length != Math.pow(2, getNumberSigns(num))) { // проверяем является ли длинна результирующего массива равной выражению Math.pow(2, getNumberSigns(num))

				// Math.pow(2, getNumberSigns(num)) - // по сути данное выражение есть формулой комбинаторики  N=n1*n2*n3*...*nk 
				// "2" - это количество знаков из которых мы выбираем (в этом случае нам нужен только "+" и "-")
				//  getNumberSigns(num) - возращает количество слотов под знаки(+,-) для числа "num" 
				//  так мы узнаем количество всех возможных комбинаций + и - для числа "num" 
				
				arrExp.includes(exp) == false ? arrExp.push(exp) : ""; // если выражение не включаеться в результирующий массив то  пушим его, если включаеться ничего не делаем 
				return findAllExpressions(num, arrExp);  // ну и вызываем функцию ещё раз только с новым значением результирующего массива  
			} else{ // функция будет выполняться до тех пор пока длинна результирующего массива не будет совпадать с количеством возможных комбинаций 
				return arrExp;
			}
		}
																			
	отдельно задание
	отдельно объяснение 
	отдельно код
*/

const findAllExpressions = (num, arrExp) => {
	let exp = getRandomExpression(num, getNumberSigns(num));
	if (arrExp.length != Math.pow(2, getNumberSigns(num))) {
		arrExp.includes(exp) == false ? arrExp.push(exp) : "";
		return findAllExpressions(num, arrExp);
	} else {
		return arrExp;
	}
}

// result = arr[i-1] + arr[i+1]
// if(el == "-"){
// 	result = result - arr[i+1];
// }
// result = result 
// [++]
// [123]
 


 