var _ = require("underscore");
const { lpad } = require("underscore.string");
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var canvas = require("canvas");

var a = 0;
for (var i = 0; i < 10; i++) {
	console.log("처음", a++)
	console.log("다음", a++)
}

// var _intervalId = "";

// var Print = function () {
//   var _totalPages = 0;
//   var _isLoad = true;
//   var _initPage = 0;
//   var _gubun = "첫번째"

//   var setTotalPage = function (totalPages, gubun) {
//     _totalPages = totalPages;
//     _gubun = gubun;
//   }

//   var print = function () {
//     console.log('print');
//   }

//   var next = function () {
//     if (_isLoad) {
//       console.log("DEBUG", "[" + _initPage, _gubun + "] data bind");
//       load(_initPage);
//       _isLoad = false;
//     } else {
//       console.log("DEBUG", "[" + _initPage, _gubun + "] print ");
//       print();
//       _initPage = _initPage + 1;
//       _isLoad = true;
//     }
//     if (_initPage === _totalPages) {
//       clearInterval(_intervalId);
//       _intervalId = "";
//       _initPage = 0;
//     }
//   }

//   var load = function (idx) {
//     console.log("DEBUG", "load [" + idx + "]");
//   }

//   return {
//     setTotalPage: setTotalPage,
//     print: print,
//     next: next,
//     load: load
//   }
// }();

// function printAll(gubun) {
//   Print.setTotalPage(3, gubun);
//   console.log("oooo", _intervalId);
//   if (_intervalId == "") {
//     _intervalId = setInterval(Print.next, 300);
//   }
// }

// printAll("첫번째");
// printAll("두번째");
// printAll("세번째");




var num;
_.map([1, 2, 3], function (num, idx) {
	console.log(num);
	console.log("idx==>" + idx);
});


var startdd = '202205222359'
console.log(startdd.substr(0, 8));
console.log(startdd.substring(0, 8));

var server = "java:comp/env/ejb12344444412312"
var name;
name = server.substring("java:comp/env/".length)
console.log(name)

var ss = [11, 22, 33, 44, 55];
_.each(ss, function (s, idx) {
	console.log("s==>" + s + "///idx==>" + idx);
});

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

var ee = ['11', '22', '33']
_.each(ee, function (s, idx) {
	console.log("s==>" + s + "///idx==>" + idx);
});

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

let key = 'bb';

var aa = {
	[key]: 'cc',
};

aa[0] = "123";
console.log(aa['bb'])


var qq = ['qq', 'ww'];
qq[0]

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

var chk = "3"
var chk12 = "2";
switch (chk) {
	case "1":
	case "3":
		if (chk12 === "2") {
			console.log(chk);
		}
		break;
	case "2":
		console.log("2");
		break;
	default:
		console.log("3");
		break;
}
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

function test1(callback) {
	callback();
	console.log("test1호출");
}

function test2() {
	console.log("test2호출");
}

test1(test2);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");


var lists = "수액111"
console.log(lists.indexOf('수액'));

var number = 0;
if (number) {
	console.log("1true");
} else {
	console.log("1false");
}

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

var nodeLength = 10;
var baseCode = "S0005";
_.each(_.range(2, nodeLength + 1), function (i) {
	if (!(baseCode.substring(0, 1) === "S" || baseCode.substring(0, 1) === "F")) {
		baseCodeArr[i] = baseCode;
	}
});

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

function isChartDrawCheck(row) {
	var targetData = "IT00000115";
	var radioMode = 0;

	if (radioMode === "0" && targetData === "IT00000115") {
		return true;
	} else if (radioMode === "1" && (targetData === "I" || targetData === "O")) {
		return true;
	}

	return false;
}

function isChartDrawCheck(row) {
	var targetData = "IT00000115";
	var radioMode = 0;

	if (radioMode === "0") { // 체중
		return (targetData === "IT00000115");
	} else if (radioMode === "1") { // IO합계
		return (targetData === "I" || targetData === "O")
	}

	return false;
}

function isChartDrawCheck(row) {
	var targetData = "IT00000115";
	var radioMode = 0;
	var result = false;

	if (radioMode === "0" && targetData === "IT00000115") {
		result = true;
	} else if (radioMode === "1" && (targetData === "I" || targetData === "O")) {
		result = true;
	}

	return result;
}

console.time();
isChartDrawCheck();
console.timeEnd();

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

console.log(_.contains([1, 2, 3], 3));

console.log("2022년 05월 05일".substring())
console.log("2022년 05월 05일".substring(6, 13))

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

for (var i = 0; i < 10; ++i) {
	console.log(i);
}

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

function globalVariable() {
	// 선언되지 않은 변수에 값을 할당하면, 자동적으로 전역변수(GLOBAL variable)가 된다.
	globalVal = "전역변수";
	// 함수 안에 선언된 변수는 그 함수의 지역변수(LOCAL variable)가 된다.
	var functionVal = "지역변수";
}
globalVariable();
console.log(globalVal);
// console.log(functionVal); // 오류!

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
var arr_all = new Array();
arr_all[1] = new Array();
arr_all[1][0] = "daysum";
var target = "daysum";
// arr_all[1][0] === target

console.log(_.contains(arr_all[1], target))

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

var targetChk = "daysum1";
var target1 = "daysum";

function targetCheck(target1) {
	switch (target1) {
		case "daysum":
			return (targetChk === target1);
	}
}

var result = targetCheck(target1);
console.log(result);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

function isTargetItemInArray(row, col, target) {
	console.log(row + "//" + col + "///" + target);
}
isTargetItemInArray(2, "daysum")

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

var gFlag = "2";
var kgFlag = "1";

if (gFlag && kgFlag) {
	console.log("4")
} else {
	if (gFlag || kgFlag) {
		console.log("3");
	} else {
		console.log("2");
	}
}

if (gFlag && kgFlag) {
	console.log("4");
} else if (gFlag || kgFlag) {
	console.log("3");
} else {
	console.log("2");
}

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

var clipdata = [[1, 2], [2, 3], []]
clipdata.splice(clipdata.length - 1, 1);
_.each(clipdata, function (data) {
	console.log("data ==>" + data);
})

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
if (3 in trees) {
	console.log(trees);
}

var employee = {
	firstName: "kim",
	lastName: "royi"
}

console.log(employee.firstName);
delete employee.firstName;
console.log(employee.firstName);
console.log(employee);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 객체 초기화 패턴
({
	// 속성 정의
	name: "nextree",

	// 객체 메소드 정의
	getName: function () {
		return this.name;
	},

	// 초기화 메소드 정의
	init: function () {
		console.log(this.getName()); // nextree 출력
	}
}).init();

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 즉시 실행 함수는 객체 프로퍼티를 정의할 때에도 사용할 수 있다.
var o = {
	message: (function () {
		var who = 'me',
			what = 'call';
		return what + ' ' + who;
	}()),
	getMsg: function () {
		return this.message;
	}
};

// 사용방법
console.log(o.getMsg()); // call me 
console.log(o.message); // call me

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

if (true) {
	var message = 'hhello';
	console.log(message);
}
console.log(message);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

const arraySparse = [1, 2, , 4]
const arraySparse1 = [2, 3, 4, 5]
arraySparse.forEach(function (e, idx, l) {
	console.log("e==>" + e + "///idx==>" + idx + "///l==>" + l);
});
console.log("context")
// var ss = [11, 22, 33, 44, 55];
_.each(arraySparse, function (s, idx, l) {
	console.log("s==>" + s + "///idx==>" + idx + "///l==>" + l);
}, arraySparse1);

console.log("context")
_.find(arraySparse, function (num, idx) {
	console.log(num, idx);
	return num === 3;
	// console.log("ok")
	// return num % 3 == 0;
});


const objectSparse = { a: 1, b: 2 }

_.each(objectSparse, (val, key, obj) => console.log(val, key, obj));
// objectSparse.forEach(function (val, key, obj) {
// 	console.log(val, key, obj);
// });

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
	console.log(`${property}: ${object[property]}`);
}

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

let it = 0;
// const intervalId = setInterval(function () {
// 	if (it === 3) return clearInterval(intervalId);
console.log(`${it++}: 인터벌로 호출 되는 콜백입니다.`);
// }, 3000);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");


var arr = [0, 1, 2, 3];
var secondArray = [4, 5, 6, 1];
_.each(arr, function (item) {
	console.log(this[item]); // 4, 5, 6
}, secondArray);

var someOtherArray = ["name", "patrick", "d", "w"];

_.each([1, 2, 3], function (num) {
	// In here, "this" refers to the same Array as "someOtherArray"

	console.log(this[num]); // num is the value from the array being iterated
	//    so this[num] gets the item at the "num" index of
	//    someOtherArray.
}, someOtherArray);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

const person = {
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
}

const person1 = {
	firstName: "John",
	lastName: "Doe"
}

console.log(person.fullName.apply(person1));

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

const person2 = {
	fullName: function (city, country, chk) {
		return this.firstName + " " + this.lastName + "," + city + "," + country + "," + chk;
	}
}

const person3 = {
	firstName: "John",
	lastName: "Doe"
}

console.log(person2.fullName.apply(person3, ["Oslo", "Norway", "chk"]));

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');


const person4 = {
	fullName: function (city, country) {
		return this.firstName + " " + this.lastName + "," + city + "," + country;
	}
}

const person5 = {
	firstName: "John",
	lastName: "Doe"
}

console.log(person4.fullName.call(person5, ["Oslo", "Norway"]));

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var obj = {
	string: 'zero',
	yell: function () {
		console.log(this.string);
	}
};

var obj2 = {
	string: 'what?'
};

obj.yell();
obj.yell.call(obj2);

var example = function (a, b, c) {
	console.log(a + b + c);
};

example(1, 2, 3);
example.call(null, 1, 2, 3);
example.apply(null, [1, 2, 3]);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

// unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
var ArrPaly = [];
ArrPaly.push('1');
ArrPaly.push('2');
ArrPaly.unshift('3');
console.log(ArrPaly.join('+'))
//result : 3+1+2

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

const reduceArr = [3, -1, 10, 5, 0];

const sum = reduceArr.reduce(function (acc, cur) {
	return acc + cur;
})

console.log(sum);

const sum1 = reduceArr.reduce((acc, value) => acc + value);
console.log(sum1);

var reduceArr2 = [
	{
		name: "james",
		age: 20
	},
	{
		name: "tom",
		age: 25
	},
	{
		name: "terry",
		age: 30
	},
	{
		name: "peter",
		age: 35
	},
]

const sum2 = reduceArr2.reduce((acc, value) => acc + value.age, 0);
console.log(sum2);
console.log(sum2 / reduceArr2.length);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var func = () => {
	console.log("함수 표현식 테스트");
}

func();

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

console.log(CryptoJS.HmacSHA1("Message", "Key"));
console.log(SHA256("Message"));


var str = "안녕하세요.	ㅋㅋㅋㅋㅋㅋ	ㅎㅎㅎㅎㅎㅎㅎ";

// tab이 포함된 문자열인지 확인
// 결과값 : true
console.log(/\t/gi.test(str));
// 공백(space) 포함된 문자열인지 확인
// 결과값 : false 
console.log(/ /gi.test(str));

// tab -> space 4번으로 변경
str = str.replace(/\t/gi, " ");

// 결과값 : false
console.log(/\t/gi.test(str));
// 결과값 : true 
console.log(/ /gi.test(str));

// 결과 문자열
console.log(str);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
var numbering;

for (var i = 0; i < 12; i++) {
	var number = (i + 1);
	numbering = ((number.toString().length) <= 1 ? '0' + number : number);
	console.log(numbering)
}

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

// 치환 정규식 방식 & replaceAll 사용
var string = "2022-10-22 19:92:22";
console.log(string.replace(/\-|\:|\s/g, ''));
console.log(string.replaceAll("-", '').replaceAll(":", '').replaceAll(" ", ''));

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var fileName = "aaa.PDF";
var fileSplit = fileName.split('.');
var fileSplitpop = fileSplit.pop();
var lastFile = fileName.split('.').reverse()[0].toLowerCase();
var fileLength = fileName.length;
var fileDot = fileName.lastIndexOf(".");
var result = fileName.substring(fileDot + 1, fileLength).toLowerCase();
fileSplit.push(result);
console.log(fileName.split('.').reverse()[0].toLowerCase());
console.log(fileName);
console.log(lastFile);
console.log(`fileDot = ${fileDot}`);
console.log(`${result}`);
console.log(fileSplit.join('.'));

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log("예시 1.");
var fileName = "aaa.PDF";
var fileArray = fileName.split('.'); // 파일명 문자열 타입을 (.)기준으로 잘라서 배열로 반환(split)
fileArray.pop(); // 배열의 마지막 요소 제거 ex:) .png, .pdf 등
var fileDot = fileName.split('.').reverse()[0].toLowerCase(); // 배열을 순서를 뒤집고 제일 처음 배열 인덱스의 값을 가져와 소문자로 변환한다.
fileArray.push(fileDot); // 소문자로 변환된 값을 배열에 삽입한다.
var resultFileName = fileArray.join('.'); // 배열의 값들을 (.)으로 연결하여 하나의 문자열로 만든다.
console.log(resultFileName);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log("예시 2.");
var fileName = "aAa.PDF";
var fileDot = fileName.lastIndexOf("."); // 끝부터 시작하여 처음으로 만나는 (.)의 인덱스 
var firstName = fileName.substring(0, fileDot); // 문자열을 0~fileDot인덱스 수만큼 자른다.
var lastName = fileName.substring(fileDot + 1, fileLength).toLowerCase(); // 문자열을 fileDot인덱스+1~문자열길이만큼 자르고 소문자로 변환
var result = firstName.concat('.', lastName); // firstName + '.' + lastName 3개의 값을 하나의 문자열로 만든다.
console.log(result);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var fileName = "aaa.PDF";
var index = fileName.lastIndexOf(".") + 1;	//파일경로를 제외한  파일명+확장자명	
var index2 = fileName.lastIndexOf("\\") + 1;	//파일명을 소문자로 변화	
var extention = (fileName.substring(index, fileName.length)).toLowerCase();
console.log(extention);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var fileName = "aaa.PDF";
var extension = fileName.slice(fileName.indexOf(".") + 1).toLowerCase();
console.log(extension);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log("예시 3.");
var fileName = "aaa.PDF";
var extention = (fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length)).toLowerCase();
var result = fileName.trim().replace(/(.PDF|.PNG|.JPG|.JPEG|.GIF)$/, '.' + extention); //공백을 제거한 후 .PDF, .PNG, .JPG, .JPEG, .GIF 문자열이 있을 경우 . + extention(변수)로 변환
console.log(result);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log("예시 4.");
var fileName = "aaa.PDF";
var extention = fileName.split('.').reverse()[0].toLowerCase();
var result = fileName.trim().replace(/(.PDF|.PNG|.JPG|.JPEG|.GIF)$/, '.' + extention);
console.log(result);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
var fileName = "aaa.PDF";
var fileType = fileName.split('.').pop().toLowerCase();
var firstFileName = fileName.substring(0, fileName.indexOf('.'));
var result1 = firstFileName + '.' + fileType,
	result2 = [firstFileName, fileType].join('.'),
	result3 = firstFileName.concat('.', fileType),
	result4 = ''.concat(firstFileName, '.', fileType);
console.log(result1);
console.log(result2);
console.log(result3)
console.log(result4);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

// 배열이 특정 조건을 만족시키는지 확인하고자 하는 경우에는 Array 객체의 every 메서드를 사용하면
// 모든 원소가 조건을 통과하는지 확인할 수 있습니다.
// 예를 들어 다음의 코드는 배열의 모든 원소가 알파벳과 숫자로만 이루어졌는지 확인하는 예제입니다.

var arrElement = [123, 'aaa', 'abc', '-', 33, 'DDD'];
var arrElement2 = ['aaa', 'abc', 'DDD'];

// 테스트하는 함수
function textValue(el, idx, arr) {
	var textExp = /^[a-zA-Z]+$/;
	console.log(el);
	return textExp.test(el);
}

// 테스트 실행
var result = arrElement.every(textValue);
var result2 = arrElement2.every(textValue);

console.log(result, result2);

// Array 객체의 some 메서드를 사용하면 주어진 조건을 만족시키는 요소가 최소 1개 이상 있는지를 확인할 수 있습니다.
var arr = [123, 'aaa', 'abc', '-', 33, 'DDD'];

var result3 = arr.some(textValue);
console.log(result3);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

function dataFunction(objData) {
	var functionData = {
		bb: "22"
	};

	console.log(_.extend(
		{
			cc: "req",
		},
		functionData,
		objData
	));

}
var data = {};
data.aa = "11";
dataFunction(data);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var initData = {
	a: "a",
	b: "b"
}
var resultData = initData.a;
resultData = "aa";
console.log(resultData);
console.log(initData.a);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var sortEx1 = _.sortBy([2, 1, 3, 6, 5, 4], function (num) { return num });
// => [1, 2, 3, 4, 5, 6]
console.log(sortEx1);

var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
var sortEx2 = _.sortBy(stooges, 'name');
// => [{ name: 'curly', age: 60 }, { name: 'larry', age: 50 }, { name: 'moe', age: 40 }];
console.log(sortEx2);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
var arrJson = [];
var jsonString = '[{ "codeflag": "1090", "bascode": "A", "bascdnm": "일반", "remark": "04" }, { "codeflag": "1090", "bascode": "F", "bascdnm": "당일", "remark": "02" }, { "codeflag": "1090", "bascode": "V", "bascdnm": "일", "remark": "03" }, { "codeflag": "1090", "bascode": "S", "bascdnm": "간", "remark": "01" }, { "codeflag": "1090", "bascode": "W", "bascdnm": "전", "remark": "05" }, { "codeflag": "1090", "bascode": "P", "bascdnm": "실", "remark": "11" }, { "codeflag": "1090", "bascode": "I", "bascdnm": "분", "remark": "12" }, { "codeflag": "1090", "bascode": "X", "bascdnm": "옥", "remark": "13" }, { "codeflag": "1090", "bascode": "O", "bascdnm": "임", "remark": "14" }, { "codeflag": "1090", "bascode": "H", "bascdnm": "조", "remark": "15" }, { "codeflag": "1090", "bascode": "N", "bascdnm": "통", "remark": "16" }]'
var objJson = JSON.parse(jsonString);
var sortJson = _.sortBy(objJson, 'remark');

_.each(sortJson, function (s, idx) {
	var json = { cd: s.bascode, nm: s.bascdnm };
	arrJson.push(json);

	if (s.bascode === "A") {
		json = { cd: "-", nm: "----------------" };
		arrJson.push(json);
	}
});
console.log(arrJson);

var json = { cd: "ss", nm: "ss" };
json += { cd: "1", nm: "2" };
console.log(JSON.stringify(json));

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var colNames = ['name', 'age'];
_.each(colNames, function (item) {
	console.log(item);
});

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var checkItems = ["vss", "ss", "sdf"]
console.log(_.indexOf(checkItems, "vss"));

console.log(_.findIndex(checkItems, "vs"));

console.log("vss".indexOf('vss1'));

for (item of checkItems) {
	console.log("ss".startsWith("vss1"));
	// if ("vss1".startsWith(item)) {

	// }
}

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function (search) {
		console.log(this);
		return true;
	}
}

var aaa = "Monitor";
aaa.startsWith("123");

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var item = "abcdefghijklm";
var vsitem = "abcd";
console.log(item.substr(0, vsitem.length));
console.log(item.substring(0, vsitem.length));
console.log(`구분자~~~~~~~~~~~~~1`);
console.log(item.substr(3, vsitem.length));
console.log(item.substring(3, vsitem.length));
console.log(`구분자~~~~~~~~~~~~~2`);
console.log(item.substr(0, 10));
console.log(item.substring(0, 10));
console.log(`구분자~~~~~~~~~~~~~3`);
console.log(item.substr(2, 10)); // 시작위치부터 몇개
console.log(item.substring(2, 10));


console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

function Prefixer(prefix) {
	this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
	// this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
	return arr.map(x => `${this.prefix}  ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var bs = {
	bb: "11"
}
console.log(_.size(bs));
console.log(Object.keys(bs).length);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
var sDept = '000268';
var deptMeta = {
	'000268': {
		trueControls: ['ctkind', 'cbkind'],
		falseControls: ['cttax', 'cttax2', 'cbtax']
	},
	'000290': {
		trueControls: ['cttax', 'cttax2', 'cbtax'],
		falseControls: ['ctkind', 'cbkind']
	},
	'default': {
		falseControls: ['cttax', 'cttax2', 'cbtax', 'ctkind', 'cbkind']
	}
}

deptMeta['000340'] = deptMeta['000290'];
deptMeta['000353'] = deptMeta['000290'];
deptMeta['000320'] = deptMeta['000290'];
deptMeta['000300'] = deptMeta['000290'];

_.each(deptMeta[sDept], function (control, list, ss) {
	console.log(control);
	console.log(list);
	console.log(ss);
});

// if (deptMeta[sDept]) {
// 	_.each(deptMeta[sDept].trueControls, function (control) {
// 		console.log("true");
// 	});

// 	_.each(deptMeta[sDept].falseControls, function (control) {
// 		console.log("false");
// 	});
// } else {
// 	_.each(deptMeta['default'].falseControls, function (control) {
// 		console.log("false");
// 	});
// }

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');


// 암호화 할 데이터

const dataa = {
	username: 'Jinho Kim',
	age: 25
};
// const dataa = "123";

// 복호화 키 지정

const privateKey = 'secret key';


// AES알고리즘 사용 암호화

const encrypted = CryptoJS.AES.encrypt(JSON.stringify(dataa), privateKey).toString();
console.log(`encrypted ==> ${encrypted}`);

// AES알고리즘 사용 복호화 ( 복구 키 필요 )

const bytes = CryptoJS.AES.decrypt(encrypted, privateKey);
console.log(`bytes ==> ${bytes}`);

// 인코딩, 문자열로 변환, JSON 변환

const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
console.log(`decrypted ==> ${decrypted}`);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

/**
 * @description 암호화
 * @param {string} key - 암호화 key값
 * @param {string} data - 암호화할 데이터
 * @returns 
 */
function encodeByAES56(key, data) {
	const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
		iv: CryptoJS.enc.Utf8.parse(""),
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC
	});
	return cipher.toString();
}

const k = "key";
const rk = k.padEnd(32, " "); // AES256은 key 길이가 32자여야 함
const b = "암호화는 보안을 위해 매우 중요합니다.";
const eb = encodeByAES56(rk, b);
console.log(eb);

/**
 * @description 복호화
 * @param {string} key - 암호화 key값
 * @param {string} data - 암호화할 데이터
 * @returns 
 */
function decodeByAES256(key, data) {
	const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
		iv: CryptoJS.enc.Utf8.parse(""),
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC
	});
	return cipher.toString(CryptoJS.enc.Utf8);
}

const k1 = "key"; // 암호화에서 사용한 값과 동일하게 해야함
const rk1 = k1.padEnd(32, " "); // AES256은 key 길이가 32자여야 함
const eb1 = eb;
const b1 = decodeByAES256(rk1, eb1);
console.log(b1);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')

// 예시
var hiddenColMeta = {
	"SEND": {
		"18761-7": {
			trueCols: [11, 2, 32, 4, 5],
			falseCols: [6, 7, 8, 9, 10]
		},
		"11488-4": {
			trueCols: [22, 12, 13, 23, 32],
			falseCols: [16, 4, 2, 13, 11]
		}
	},
	"RECEIVE": {
		trueCols: [2, 3, 4, 5, 6],
		falseCols: [33, 45, 21, 34]
	}
}

var transferMode = "SEND";
var classCode = '18761-7';
var loopMeta = hiddenColMeta[transferMode][classCode];

if (loopMeta) {
	_.each(loopMeta.trueCols, function (col) {
		console.log("grid1.colHidden(" + col + ") = true");
	});

	_.each(loopMeta.falseCols, function (col) {
		console.log("grid1.colHidden(" + col + ") = false");
	});
}

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

let enemyList = [];
function Enemy() {
	this.x = 0;
	this.y = 0;
	this.init = function () {
		this.y = 0;
		this.x = 47;
		enemyList.push(this);
	};
}

var en = new Enemy;
en.init();
// console.log(enemyList)
enemyList.forEach((item, index) => {
	// ctx.drawImage(enemyImage, item.x, item.y);
	console.log(item.x);
})

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

let Value = '222'
let Codes = ['111', '222', '333'];
console.log(_.contains(Codes, Value) ? '배열안에 값이 존재합니다.' : '배열안에 값이 없습니다.');

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

let arr11 = [{
	a: 1,
	alive: false
},
{
	a: 2,
	alive: true
},
{
	a: 3,
	alive: true
},
{
	a: 4,
	alive: false
},
];

arr11 = arr11.filter(item => !item.alive);
console.log(arr11);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

let testJson = [{ 'cc': '1', 'dd': '2' }, { 'cc': '22', 'dd': '3' }];
_.each(testJson, (json) => {
	console.log(json);
})

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

function at(n) {
	n = parseInt(n, 10) || 0

	// 음수 일 경우 길이 만큼 더한다. 이렇게 하면 음수 인덱싱을 대응할 수 있다.
	if (n < 0) {
		n += this.length
	}

	// 인덱싱에 대응할 수 없을 경우 undefined를 리턴한다.
	if (n < 0 || n >= this.length) {
		return undefined
	}

	return this[n]
}

let testa = [1, 2, 4, 5];
console.log(testa.at(0));

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");