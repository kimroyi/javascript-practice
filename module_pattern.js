var module = (function() {
    var privateValue = "변수1";
    var init = function() {
        console.log('module_pattern:3 init', init);
        console.log('this: ', this);
        outFunction();
    }

    var _privateFunction = function() {
        console.log('module_pattern:8 _privateFunction', _privateFunction);
        
    }

    return {
        init: init
    }
})();

module.init();
// module._privateFunction(); //불가
console.log('module_pattern:32 module.privateValue', module.privateValue);
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var module2 = {
    publicValue: '변수2',
    init: function() {
        console.log('module_pattern:19 init');
        console.log('this: ', this);
        
    }
}

module2.init();
console.log('module_pattern:36 module2.publicValue', module2.publicValue);
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var module3 = (function() {
    var util = {
        value: "module3",

        init: function() {
            console.log("module3.util.init");
            console.log('this: ', this);
            console.group(util.value);
            util.init2();
        },

        init2: function() {
            console.log('module3.util.init2');
        }
    };

    return {
        init: util.init
    };
})();

module3.init();
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var module4 = (function() {
    var util = (function() {
        var value = "module4";

        var init = function() {
            console.log("module4.util.init");
            console.log('this: ', this);
            console.log(value);
            init2()
        }
        
        var init2 = function() {
            console.log('module4.util.init2');
        }

        return {
            init: init
        }
    })();

    return {
        util:util
    };
})();

module4.util.init();
// module4.util.init2(); //불가
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var module5 = {
    util: (function() {
        var init = function() {
            console.log('module5.util.init');
            console.log('this: ', this);
        }

        var init2 = function(){
            console.log('module5.util.init2');
        }

        return {
            init: init
        }
    })()
}
module5.util.init();
// module5.util.init2(); //불가


function outFunction() {
    console.log('module_pattern:105 outFunction', outFunction);
}