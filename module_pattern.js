var module = (function () {
    var privateValue = "변수1";
    var init = function () {
        console.log('module_pattern:3 init', init);
        console.log('this: ', this);
        outFunction();
    }

    var _privateFunction = function () {
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
    init: function () {
        console.log('module_pattern:19 init');
        console.log('this: ', this);

    }
}

module2.init();
console.log('module_pattern:36 module2.publicValue', module2.publicValue);
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var module3 = (function () {
    var util = {
        value: "module3",

        init: function () {
            console.log("module3.util.init");
            console.log('this: ', this);
            console.group(util.value);
            util.init2();
        },

        init2: function () {
            console.log('module3.util.init2');
        }
    };

    return {
        init: util.init
    };
})();

module3.init();
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var module4 = (function () {
    var util = (function () {
        var value = "module4";

        var init = function () {
            console.log("module4.util.init");
            console.log('this: ', this);
            console.log(value);
            init2()
        }

        var init2 = function () {
            console.log('module4.util.init2');
        }

        return {
            init: init
        }
    })();

    return {
        util: util
    };
})();

module4.util.init();
// module4.util.init2(); //불가
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

var module5 = {
    util: (function () {
        var init = function () {
            console.log('module5.util.init');
            console.log('this: ', this);
        }

        var init2 = function () {
            console.log('module5.util.init2');
        }

        return {
            init: init
        }
    })()
}
module5.util.init();
// module5.util.init2(); //불가
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

function outFunction() {
    console.log('module_pattern:105 outFunction', outFunction);
}

const moment = require('moment')
var module6 = (function () {
    var dateUtil = {
        formatDate: function (date, format) {
            var _format = 'YYYY-MM-DD';

            if (format) {
                _format = format;
            }

            return date ? moment(date).format(_format) : moment().format(_format);
        },

        addDays: function (date, days) {
            return moment(date).add(days, 'days').toDate();
        },
        subtractDays: function (date, days) {
            return moment(date).subtract(days, 'days').toDate();
        },
        diffDays: function (date1, date2) {
            return moment(date1).diff(moment(date2), 'days');
        },
        dateRange: function (startDate, endDate, format) {
            var dates = [];
            var currentDate = moment(startDate);
            var lastDate = moment(endDate);

            while (currentDate <= lastDate) {
                dates.push(moment(currentDate).format(format));
                currentDate.add(1, 'days');
            }

            return dates;
        }
    }

    return {
        formatDate: dateUtil.formatDate,
        addDays: dateUtil.addDays
    }
})();

var formatDate = module6.formatDate('20230801', 'YYYY-MM-DD');
var addDays = module6.addDays('20240312', 2);


console.log('formatDate::', formatDate);
console.log('addDays::', addDays);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
