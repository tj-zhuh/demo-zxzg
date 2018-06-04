

define(function (require) {

    var echarts = require('echarts');
    var util = require('util');
    var puton = require('puton');
    var ret = {
        chart:null
    };

    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = {
            
            //title: { text: '图表标题' },
            legend: {
                data: ['计划量', '未开工量', '执行中量', '延期量', '已经完工量']
            },
            xAxis: [{
                type: 'category',
                data: ['特种...', 'PCBA...', '电控...', '变频...', '变频...']
            }],
            yAxis: [{
                type: 'value',
                max: 100,
                min:0
            }],
            series: [{
                name: '计划量',
                type: 'bar',
                data: util.getRandoms(5, 60, 100)
            }, {
                name: '未开工量',
                type: 'bar',
                data: util.getRandoms(5, 0, 20)
            }, {
                name: '执行中量',
                type: 'bar',
                data: util.getRandoms(5, 10, 35)
            }, {
                name: '延期量',
                type: 'bar',
                data: util.getRandoms(5, 0, 20)
            }, {
                name: '已经完工量',
                type: 'bar',
                data: util.getRandoms(5, 20, 50)
            }],
            grid: {
                bottom:'10%'
            }
        }

        option = puton.bar1(option);

        ret.chart.setOption(option);

    }

    return ret;

})





















