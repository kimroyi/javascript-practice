class Main {
    constructor() {
        this.init(); // 클래스 초기화 메서드 호출
    }

    init() {
        // 'this'를 참조하기 위한 별칭 변수
        const me = this;

        // 빈 팝업 생성 (아무 동작 없음)
        const emptyPopup = new EmptyPopup();

        // 익명 함수 사용: 'this' 대신 'me'를 사용해 Main 클래스의 search() 호출
        const callbackPopup = new CallbackPopup(
            "익명 함수로 사용. Main 클래스의 메서드 호출",
            function () {
                me.search(); // 'me'는 Main 클래스의 'this'를 참조
            }
        );

        // search()의 실행 결과를 전달 (바로 호출됨)
        const callbackPopup1 = new CallbackPopup(
            "search() 결과를 전달. 콜백 함수가 없다고 뜸.",
            this.search() // 메서드를 호출하고 그 결과를 전달
        );

        // 화살표 함수 사용: Main 클래스의 'this'를 캡처
        const callbackPopup2 = new CallbackPopup(
            "화살표 함수 사용. Main 클래스의 메서드 호출",
            () => this.search() // 화살표 함수는 Main 클래스의 'this'를 고정
        );
    }

    // Main 클래스의 메서드
    search() {
        console.log("검색");
        console.log("search() 호출 시점에 실행됨");
    }
}

// 팝업 클래스
class CallbackPopup {
    constructor(str, callbackFunc) {
        console.log("=== 팝업 인스턴스 생성 시작 ===");
        console.log(str);

        if (callbackFunc) {
            console.log("콜백 함수 있음.");
            callbackFunc(); // 전달된 콜백 함수 실행
        } else {
            console.log("콜백 함수 없음.");
        }

        console.log("=== 팝업 인스턴스 생성 끝 ===");
    }
}

// 빈 팝업 클래스 (별도 동작 없음)
class EmptyPopup {
    constructor() {
        console.log("빈 팝업 생성");
    }
}

// Main 클래스 인스턴스 생성 및 실행
const main = new Main();
