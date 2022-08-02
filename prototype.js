// 생활코딩 : JavaScript 객체지향 프로그래밍 - 7.1. prototype이 필요한 이유
function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    // Person 생성자가 실행될 때 마다 생성하려는 객체의 sum이라는 이름의 함수가 생성될 때마다 새로 만들어지고 있다.
    // 그럴경우 컴퓨터의 메모리 낭비 및 성능을 저하 시킬 수 있다.
    this.sum = function () {
        return this.first + this.second;
    }
}

// Person이라는 생성자 함수에 sum이라고 하는 함수 프로토타입 즉 원형을 정한다
// 생성자 함수안에 정의해놓은 게 아니므로 객체 생성 시 마다 실행되지 않고 한번 만 실행된다.
// 한번만 정의되기 때문에 즉 성능 및 메모리를 절약할 수 있다.
Person.prototype.sum = function () {
    return 'prototype : ' + (this.first + this.second);
}

var kim = new Person('kim', 10, 20);
// 인스턴스 생성 이후 sum이라는 함수의 동작방식을 변경시킬 수 있다.
kim.sum = function () {
    return 'this : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);
console.log(`kim sum() ${kim.sum()}`);
console.log(`lee sum() ${lee.sum()}`);

// 자바스크립트는 kim이라는 객체에 sum이라는 메소드를 호출할 때 제일 먼저 그 객체 자신이 sum이라는 속성을 가지고 있는지 찾는다.
// lee처럼 lee객체에 sum이라는 메소드가 없을 경우 해당 객체의 생성자인 Person에 prototype의 sum이라는 메소드가 정의되어있는지 찾는다.
// 일반적으로 변수(속성)들은 생성자안에 넣고, 함수는 생성자함수.프로토타입.함수명 으로 constructor를 이용해서 객체를 생성할 때 사용되는 일종의 패턴이라고 할 수 있다.