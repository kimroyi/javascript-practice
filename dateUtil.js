
const moment = require('moment');
var module6 = (function () {
    var dateUtil = {
        /**
        * 지정한 형식을 사용하여 지정한 날짜 문자열의 형식을 지정합니다.
        * 형식이 제공되지 않으면 기본값은 'YYY-MM-DD'입니다.
        * @param {string} date - 포맷할 날짜 문자열입니다.
        * @param {string} [format=YYYY-MM-DD] - 날짜 형식에 사용할 형식입니다.
        * @return {string} 형식이 지정된 날짜 문자열을 반환합니다.
        */
        formatDate: function (date, format) {
            var _format = 'YYYY-MM-DD';

            if (format) {
                _format = format;
            }

            return date ? moment(date).format(_format) : moment().format(_format);
        },

        /**
        * 지정한 형식에 따라 지정한 날짜 문자열이 유효한 날짜인지 확인합니다.
        * @param {string} date - 유효성을 검사할 날짜 문자열입니다.
        * @return {boolean} 날짜가 유효하면 true이고, 그렇지 않으면 false입니다.
        */
        isValidDate: function (date) {
            return moment(date, ['YYYYMMDD', 'YYYY-MM-DD'], true).isValid();
        },

        /**
        * 지정한 날짜 문자열에 지정한 일수를 추가합니다.
        * 날짜가 제공되지 않으면 현재 날짜를 사용합니다.
        * @param {string} date - 날짜가 추가되는 날짜 문자열입니다.
        * @param {number} days - 추가할 일수입니다.
        * @param {string} format - 결과 날짜 문자열의 형식입니다.
        * @return {string} 일을 추가한 후 결과 날짜 문자열을 반환합니다.
        */
        addDays: function (date, days, format) {
            var momentObj = date ? moment(date) : moment();
            var addDate = momentObj.add(days, 'days').toDate();
            
            return dateUtil.formatDate(addDate, format);
        },

        /**
        * 지정한 날짜 문자열에서 지정한 날짜 수를 줄입니다.
        * 날짜가 제공되지 않으면 현재 날짜를 사용합니다.
        * @param {string} date - 날짜를 뺀 날짜 문자열입니다.
        * @param {number} days - 뺄 일수입니다.
        * @param {string} format - 결과 날짜 문자열의 형식입니다.
        * @return {string} 일을 뺀 후 결과 날짜 문자열을 반환합니다.
        */
        subtractDays: function (date, days, format) {
            var momentObj = date ? moment(date) : moment();
            var subtractDate = momentObj.subtract(days, 'days').toDate();

            return dateUtil.formatDate(subtractDate, format);
        },

        /**
        * 두 날짜 문자열 간의 일 차이를 계산합니다.
        * @param {string} date1 - 첫 번째 날짜 문자열입니다.
        * @param {string} date2 - 두 번째 날짜 문자열입니다.
        * @return {number} 두 날짜 간의 날짜 차이입니다.
        */
        diffDays: function (date1, date2) {
            return moment(date1).diff(moment(date2), 'days');
        },

        /**
        * 지정한 날짜 범위 내의 날짜 배열을 생성합니다.
        * @param {string} startDate - 범위의 시작 날짜입니다.
        * @param {string} endDate - 범위의 종료 날짜입니다.
        * @param {string} [format=YYYY-MM-DD] - 결과 날짜 문자열의 형식입니다.
        * @return {string[]} 범위 내의 날짜 문자열 배열을 반환합니다.
        */
        dateRange: function (startDate, endDate, format) {
            var dates = [];
            var currentDate = moment(startDate);
            var lastDate = moment(endDate);
            var format = format || 'YYYY-MM-DD';

            while (currentDate <= lastDate) {
                dates.push(moment(currentDate).format(format));
                currentDate.add(1, 'days');
            }

            return dates;
        },

        /**
        * 시작 날짜와 종료 날짜를 지정된 형식의 범위 문자열로 포맷합니다.
        * @param {string} startDate - 범위의 시작 날짜입니다.
        * @param {string} endDate - 범위의 종료 날짜입니다.
        * @param {string} [format=YYYY-MM-DD] - 결과 날짜 범위 문자열의 형식입니다.
        * @return {string} 형식이 지정된 날짜 범위 문자열을 반환합니다.
        */
        formattedDateRange: function (startDate, endDate, format) {
            var formattedStartDate = dateUtil.formatDate(startDate, format);
            var formattedEndDate = dateUtil.formatDate(endDate, format);
            
            return formattedStartDate + ' ~ ' + formattedEndDate;
        }
    }

    return {
        formatDate: dateUtil.formatDate,
        isValidDate: dateUtil.isValidDate,
        addDays: dateUtil.addDays,
        subtractDays: dateUtil.subtractDays,
        diffDays: dateUtil.diffDays,
        dateRange: dateUtil.dateRange,
        formattedDateRange: dateUtil.formattedDateRange
    }
})();

console.log(module6.formatDate('20230801')); // 출력: '2023-08-01'
console.log(module6.formatDate('2023-08-01')); // 출력: '2023-08-01'
console.log(module6.formatDate('2023-08-01T00:00:00Z')); // 출력: '2023-08-01'
console.log('formatDate ENDㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(module6.addDays('2023-08-01', 1)); // 출력: 다음 날짜
console.log(module6.addDays('20230801', 1)); // 출력: 다음 날짜
console.log('addDays ENDㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(module6.subtractDays('2023-08-01', 1)); // 출력: 이전 날짜
console.log(module6.subtractDays('20230801', 1)); // 출력: 이전 날짜
console.log('subtractDays ENDㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(module6.diffDays('2023-08-05', '2023-08-01')); // 출력: 4
console.log(module6.diffDays('20230805', '20230801')); // 출력: 4
console.log('diffDays ENDㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(module6.dateRange('2023-08-01', '2023-08-05', 'YYYY-MM-DD')); // 출력: ['2023-08-01', '2023-08-02', '2023-08-03', '2023-08-04', '2023-08-05']
console.log('dateRange ENDㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(module6.isValidDate('20241001')); // 출력: true
console.log(module6.isValidDate('20241039')); // 출력: false
console.log('isValidDate ENDㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
console.log(module6.formattedDateRange('20230801', '20230805')); // 출력: '2023-08-01 ~ 2023-08-05'
console.log('isValidDate ENDㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
