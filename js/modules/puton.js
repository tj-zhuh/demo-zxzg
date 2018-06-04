﻿
; (function (root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(function (require) { return factory(); })
    }
    else {
        root.puton = factory()
    }
}(this, function () {

    var _handlersHelper = {

        extend: function () {

            //反复往里面遍历
            function zMultiplex(obj1, obj2) {

                //创建一个将要返回的对象
                var _obj = obj1;

                for (var k in obj2) {

                    //如果obj1没有[k]覆盖
                    if (!_obj[k]) {
                        _obj[k] = obj2[k];
                        continue;
                    }

                    //如果obj1是字符串,obj2直接覆盖obj1
                    if (typeof _obj[k] == 'string' || typeof _obj[k] == 'number') {
                        _obj[k] = obj2[k];
                    }

                        //如果obj1是对象obj2是字符串,obj1覆盖obj2
                    else if (typeof obj1[k] == 'object' && typeof obj2[k] !== 'object') {
                        continue;
                    }

                        //都是对象,深度覆盖
                    else {

                        _obj[k] = zMultiplex(_obj[k], obj2[k]);
                    }
                }
                return _obj;
            }

            //第一个对象
            var _temp = arguments[0];

            //每后一个对象对第一个进行填补
            if (!!arguments[arguments.length - 1]) {

                for (var i = 1; i < arguments.length; i++) {

                    //查看下一个对象中的每一个键
                    for (var j in arguments[i]) {

                        //如果_temp[j]是obj且arguments[i][j]是string,
                        if (typeof _temp[j] == 'object' && typeof arguments[i][j] == 'string') {
                            ;
                        }

                            //如果都是obj
                        else if (typeof _temp[j] == 'object' && typeof arguments[i][j] == 'object') {
                            _temp[j] = zMultiplex(_temp[j], arguments[i][j]);
                        }

                            //如果_temp[j]是string,且arguments[i][j]是object,
                            //如果都是string
                            //如果_temp里面没有_temp[j]
                        else {
                            _temp[j] = arguments[i][j];
                        }
                    }
                }
            }

                //不是深度覆盖
            else {
                for (var i = 1; i < arguments.length - 1; i++) {
                    for (var j in arguments[i]) {
                        _temp[j] = arguments[i][j];
                    }
                }
            }

            return _temp;
        }
    }

    var ret = {};

    //柱状图皮肤1(ok)
    ret.bar1 = function (x) {

        var _option = {
            color: ['#854ab3', '#008398', '#0754af', '#f1a83c', '#00b9ed', '#de6371','#f38b89'],
            legend: { textStyle: { color: '#666',fontSize:14 } },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type:'shadow'
                }
            },
            xAxis: [{
                axisLabel: {
                    textStyle: {
                        color:'#666'
                    }
                },
                axisLine: {
                    lineStyle: { color: '#d7d7d7' }
                }
            }],
            yAxis: [{
                axisLabel: {
                    textStyle: {
                        color: '#666'
                    }
                },
                axisLine: {
                    lineStyle: { color: '#d7d7d7' }
                },
                splitLine: {
                    show:0
                }
            }]
        };

        var _temp = _handlersHelper.extend(_option, x);

        return _temp;
    }

    //柱状图皮肤2
    ret.bar2 = function (x) {

        var _option = {
            color: ['#f09b55', '#5bac99','#7273c8'],
            legend: { textStyle: { color: '#fff' } },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine: {
                    lineStyle: { color: '#fff' }
                }
            },
            yAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: 0
                }
            }
        };

        var _temp = _handlersHelper.extend(_option, x);

        return _temp;
    }

    //折线图皮肤1(ok)
    ret.line1 = function (x) {

        var _option = {
            color: ['#69AADC', '#F38A89', '#80BA94', '#BD98CC'],
            legend: { textStyle: { color: '#666' } },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [{
                axisLine: {
                    lineStyle: {
                        color: '#d7d7d7',
                        width: 1
                    }
                }, axisLabel: {
                    textStyle: {
                        color: '#666'
                    }
                },
                splitLine: { show: false }
            }],
            yAxis: [{
                axisLine: {
                    lineStyle: {
                        color: '#d7d7d7',
                        width: 1
                    }
                }, axisLabel: {
                    textStyle: {
                        color: '#666'
                    }
                },
                splitLine: { show: false }
            }, {
                axisLine: {
                    lineStyle: {
                        color: '#d7d7d7',
                        width: 1
                    }
                },
                splitLine: { show: false },
                axisLabel: { show: false },
                axisTick: { show: false }
            }],
            //对series的特殊处理
            series: (function () {
                var _temp = [];
                for (var i = 0; i < x.series.length; i++) {
                    _temp.push({
                        symbol: 'circle',
                        symbolSize: 10,
                        smooth:0.5,
                        lineStyle: {
                            normal: {
                                shadowBlur: 4,
                                shadowColor: '#888',
                                shadowOffsetX: 1,
                                shadowOffsetY:1
                            }
                        }
                    })
                }
                return _temp;
            })()
        };

        var _temp = _handlersHelper.extend(_option, x);

        return _temp;
    }

    //(ok)
    ret.pie1 = function (x) {
        var _option = {
            color: ['#63a5c8', '#e8c888', '#bb99cb'],
            legend: {
                textStyle: { color: '#666',fontSize:14 }, orient: 'vertical',
                top:'8%',right:'5%'
            },
            tooltip: {},
            series: [{
                label: {
                    normal: {
                        textStyle: {fontSize:14}
                    }
                },
                labelLine: { normal: { lineStyle: { color: '#000' } } }
            }]
        };

        var _temp = _handlersHelper.extend(_option, x, true);

        return _temp;
    }

    //表盘图皮肤1(ok)
    ret.gauge1 = function (x) {

        var _option = {

            tooltip: {
                show: true,
                backgroundColor: '#F7F9FB',
                borderColor: '#92DAFF',
                borderWidth: '1px',
                textStyle: {
                    color: 'black'
                }
            },
            series: [
                {
                    center: ['50%', '70%'],
                    startAngle: 180,
                    endAngle: 0,
                    radius: '120%',
                    detail: {
                        textStyle: {
                            fontSize: 18,
                            color:'#000'
                        },
                        offsetCenter: [0, '20%']
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 40,
                            shadowBlur: 0,
                            color: [
                                [0.3, '#e08e8d'],
                                [0.7, '#e8c888'],
                                [1, '#80ba94']
                            ]
                        }
                    },
                    axisLabel: { show: 0 }
                }
            ]
        }

        _option = _handlersHelper.extend(_option, x);

        return _option;

    }


    //适配暗色
    ret.getAllDarked = function (x, ifbl) {

        var _option;

        if (ifbl)
            _option = {
                title: {
                    textStyle:{color:'#fff'}
                },
                legend: {
                    textStyle: { color: '#fff' }
                },
                xAxis: {
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisLine: {
                        lineStyle: { color: '#fff' }
                    }
                },
                yAxis: {
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color:'transparent'
                        }
                    },
                    axisLine: {
                        lineStyle: { color: '#fff' }
                    }
                }
                //series: [{symbol:'circle'}]
            }

        else if(!ifbl)
            _option = {
                title: {
                    textStyle: { color: '#fff' }
                },
                legend: {
                    textStyle: { color: '#fff' }
                },
                series: [{
                    
                    label: {
                        normal: {
                            color:'#fff'
                        }
                    },
                    labelLine: {
                        lineStyle: {color:'#fff'}
                    }
                }]
            }

        _option = _handlersHelper.extend(_option, x);

        if (ifbl) {
            if (_option.series)
            for (var i = 0; i < _option.series.length; i++) {
                _option.series[i].symbol='circle'
            }
        }



        return _option;
    }












    return ret;

}))