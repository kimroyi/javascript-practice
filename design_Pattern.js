// 문제점 : 비공개 멤버로 보이지만 참초하여 값을 바꿀 수가 있다.
// function Gadget(){
//     // 비공개 멤버
//     var specs = {
//         screen_width : 320,
//         screen_height : 480,
//         color : "white"
//     };

//     // 공개 함수
//     this.getSpecs = function(){
//         return specs;
//     };
// }

// var toy = new Gadget(),
//         specs = toy.getSpecs();

// specs.color = "black";
// specs.price = "free";

// console.log(toy.getSpecs());

var myObj = function(){

    // 고유 멤버(private member)가 될 스코프
    var sayHi = "안녕하세요!!";
    var intCnt = 0;
    var hi = function() {
        intCnt += 1; // hi 함수를 호출할 때마다 1씩 증가하도록 함 
        return sayHi;
    };

    var cnt = function() {
        return intCnt; // closure를 통해서 증가된 intCnt값을 반환하도록 해준다.
    }


    // 특권/공용메소드와 프로퍼티 (공용 인터페이스)=>외부에 공개하기 위한 역할
    // 객체 리터럴을 함수 값으로 반환(반환되는 객체리터럴에는 공용이 될 프로퍼티와 메소드만 소유)
    return {
        getHi : function() {
            return sayHi; // 고유멤버에 접근이 가능(특권 메소드)
        },
        getHi2 : function() {
            return '반갑습니다~~!!';
        },
        getHi3 : hi,
        getCnt : intCnt, // intCnt를 직접 외부에 반환시켜주면 증가된 값이 출력되지 않는다.
        getCnt2 : cnt
    }
}();

// 모듈 패턴 외부에서 함수 호출이 가능한 것은 객체 리터럴을 반환값으로 넘겨줬기 때문이다
// 이렇게 외부에서 사용이 가능하다고 하여 공용 메소드라고 일컫는다.
console.log(myObj.getHi());
console.log(myObj.getHi2());
console.log(myObj.getHi3());
console.log(myObj.getCnt);
console.log(myObj.getCnt2());
console.log(myObj.getHi3());
console.log(myObj.getCnt2());



var _submit = {
    abc: "ss",

    submit: function() {
        console.log("submit");
        var result = "result"
        return result;
    },

    init: function(){
        this.submit();
        console.log("init");
    }
}

var DynamicGrid = function() {
    var aaa = "ss";

    var _setInitData = function(data) {
        console.log("data==>" + data);
        return data;
    }

    return {
        initData: _setInitData,
    }

}();

_submit.init();
// console.log(_submit.abc);
// _submit.abc = "ab"
// console.log(_submit.abc);
// console.log(_submit.submit());
// console.log(DynamicGrid.initData("123"));
// DynamicGrid.aaa = "dy";

var chk = 
console.log("123-->" + _.isNaN(chk));