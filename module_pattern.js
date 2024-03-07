var module = (function() {
    var privateValue = "변수1";
    var init = function() {
        console.log('module_pattern:3 init', init);
        outFunction();
    }

    var _privateFunction = function() {
        console.log('module_pattern:8 _privateFunction', _privateFunction);
        
    }

    return {
        init: init
    }
})();

var module2 = {
    publicValue: '변수2',
    init: function() {
        console.log('module_pattern:19 init');
        
    }
}

var module3 = (function() {
    var util = {
        init: function() {
            console.log("util.init");
        },

        init2: function() {
            console.log('util.init2');
        }
    };

    return {
        init: util.init
    };
})(); // IIFE를 추가하여 모듈 실행

function outFunction() {
    console.log('module_pattern:13 outFunction', outFunction);
}

// module.init();
// // module._privateFunction(); //불가
// console.log('module_pattern:32 module.privateValue', module.privateValue);


// module2.init();
// console.log('module_pattern:36 module2.publicValue', module2.publicValue);

module3.init();
