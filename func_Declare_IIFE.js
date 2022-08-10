/**
 * 참고
 * https://medium.com/sjk5766/iife-immediately-invoked-function-expression-%EC%A0%95%EB%A6%AC-53ab6543b828
 * https://www.nextree.co.kr/p4150/
 * https://iamadeveloper.tistory.com/48
 * https://developer.mozilla.org/ko/docs/Glossary/IIFE
 * https://ko.wikipedia.org/wiki/%EC%A6%89%EC%8B%9C_%EC%8B%A4%ED%96%89_%ED%95%A8%EC%88%98
 */

/**
 * 함수 선언문
 * - 함수선언문은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.
 *   그래서 실행할 때 어느 위치에서 호출하든 문제가 발생하지 않는다.
 * 
 * 함수 표현식
 * - 인터프리터가 해석해서 해당 코드 줄에 도달했을 때 동작합니다.
 *   그래서 호출시점이 선언시점보다 먼저 있다면 정의되지 않은 함수가 됩니다.
 * - 종류 : 익명/기명 함수 표현식, 즉시실행 익명/기명 함수 표현식
 * 
 * 즉시실행함수(IIFE, Immediately Invoked Function Expression)
 * - 함수가 정의되자 마자 즉시 실행된다는 특징이 있다.
 * 
 * 즉시실행함수(IIFE) 사용이유
 * - IIFE에서 생성된 변수와 함수의 이름은 전역 Scope와 충돌하지 않습니다.
 * - 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지
 * - IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있다. 즉 함수 내에 정의된 변수 프라이버시 유지 가능
 * - closure와 함께 private data를 사용할 수 있습니다. 즉 내부 변수를 외부로부터 private하게 보호 할 수 있다는 장점.
 */

// 함수 선언문
declareFunc(); // 호이스팅으로 인해 문제없이 호출 가능
function declareFunc() {
    console.log("함수 선언문 입니다.");
}

// 익명 함수 표현식
// anonymousFunc(); // 정의되지 않은 함수로 인해 오류
var anonymousFunc = function () {
    console.log('익명 함수 표현식 입니다.');
};
anonymousFunc();

// 기명 함수 표현식
var named = function namedFunc() {
    console.log('기명 함수 표현식 입니다.');
};
named();

// 즉시 실행 익명 함수 표현식
(function () {
    console.log('즉시 실행 익명 함수 표현식 방법 1 (✨ 해당 방법이 널리 활용되고 있음.)');
})();

(function () {
    console.log('즉시 실행 익명 함수 표현식 방법 2');
}());

/**
 * 이와 같이 변수에 할당 시에는 괄호 생략해서 구현가능하다.
 * (function () {})(); -> function () {}();
 */
var funcToVariable = function () {
    console.log("즉시 실행 익명 함수 표현식 변수 할당");
}();

// 익명 즉시실행함수 es6 화살표함수(Arrow function) 적용한 예시
(() => console.log('즉시 실행 익명 함수 표현식 화살표 함수 적용 예시 1 '))();

(() => {
    console.log('즉시 실행 익명 함수 표현식 화살표 함수 적용 예시 2');
})();

// 즉시 실행 익명 함수 표현식에 인자를 전달하는 방법
(function (count) {
    for (let i = 0; i < count; i++) {
        console.log(`익명 IIFE 인자 전달 -> ${i}`);
    }
})(3);

// 즉시 실행 기명 함수 표현식에 인자를 전달하는 방법
(function namedIIFE(count) {
    for (let i = 0; i < count; i++) {
        console.log(`기명 IIFE 인자 전달 -> ${i}`);
    }
})(3);


/**
 * IIFE가 실행과 동시에 Closure 함수를 리턴하고 있으며, 
 * 이 때 count변수는 private 변수로 외부에서 접근이 불가능하게 됩니다.
 * IIFE를 응용한 모듈 패턴 예시.
 */
const getCount = (function () {
    let count = 0;
    return function () {
        return ++count;
    };
})();

console.log(getCount());
console.log(getCount());
