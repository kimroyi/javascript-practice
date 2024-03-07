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

function outFunction() {
    console.log('module_pattern:13 outFunction', outFunction);
}

module.init();
// module._privateFunction(); //불가
console.log('module_pattern:32 module.privateValue', module.privateValue);


module2.init();
console.log('module_pattern:36 module2.publicValue', module2.publicValue);
