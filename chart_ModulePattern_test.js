var _CONST = {
    style: {
        "7": {
            CandleStyle: 0
        },
        "24": {
            CandleStyle: 2
        }
    }
}

var DrawChart = function () {

    var _CONST = {
        Panel: {
            "7": {
                MarginTop: 1,
                MarginLeft: 16,
                MarginRight: 1,
                MarginBottom: 0
            },
            "24": {
                MarginTop: 1,
                MarginLeft: 17,
                MarginRight: 1,
                MarginBottom: -5
            }
        },
        Axis: {
            "7": {
                Custom: [
                    {
                        name: "혈압축",
                        AxisPen_Color: 0x0000ff
                    }
                ]
            },
            "24": {
                Custom: [
                    {
                        name: "혈압축",
                        AxisPen_Color: 0x000099,
                        Title_Caption: "혈압/맥박"
                    },
                    {
                        name: "호흡축",
                        AxisPen_Color: 0x000099
                    },
                    {
                        name: "체온축",
                        AxisPen_Color: 0x000099
                    }
                ]
            }
        },
        // Header: {

        // },

        // "7": {

        // },

        // "24": {

        // }
    }

    var _setInitData = function (data) {
        _CONST.style['24'].CandleStyle = data;
        TextHelp.convertText
    }

    var _setDrawPannel = function (chartObj, type) {
        chartObj.Panel.MarginTop = _CONST.Panel[7].MarginBottom;
        chartObj.Panel.MarginLeft = _CONST.Panel[7].MarginLeft;
        chartObj.Panel.MarginRight = _CONST.Panel[7].MarginRight;
        chartObj.Panel.MarginBottom = _CONST.Panel[7].MarginBottom;
    }

    var _setDrawAxis = function (chartObj, type) {
        _.each(_CONST.Axis[24].Custom, function (e) {
            chartObj.Axis.Custom
        });

        for (var idx = 0; idx < _CONST.Axis[24].Custom.length; idx++) {
            var _e = _CONST.Axis[24].Custom[idx];
            chartObj.Axis.Custom(idx).AxisPen.Color = _e.AxisPen_Color;

        }
    }

    var setInit = function (chartObj, type) {

        var _itemCd = type == "7" ? "clinicItemCD" : "recitemCD";

        _setDrawPannel(type);
        _setDrawAxis(type);
    }

    var getText = function () {
        _setInitData(data)
        return 'text'
    }

    return {
        setInit: setInit,
        getText: getText
    }
}(TeeChart1, TextHelp, TF);

var FlexGrid = function () {

    var _privateMethod = function () {

    }

    var event = {
        afterEdit: function (intButton, intShift, x, y) {

        },
        mouseMove: function () {

        }
    }

    return {
        afterEdit: event.afterEdit
    }
}();

var TextHelp = function () {

    var converText = function (data) {
        return _.uppercase(data);
    }

    return {
        convertText: convertText
    }
}();

DrawGrid.getText();

DrawChart.setInit(TeeChart1, "7");