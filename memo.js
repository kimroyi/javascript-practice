var _ = require("underscore");
const { lpad } = require("underscore.string");
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");

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
