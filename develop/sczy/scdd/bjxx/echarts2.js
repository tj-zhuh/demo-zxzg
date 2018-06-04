

define(function (require) {

	var echarts = require('echarts');
	var putOn = require('puton');
	var dao = require('dao');

	var ret = {
		chart: null
	};

	//取随机数组工具函数(获得固定数量的数组型数据)
	function getRadomNums(nums, min, max) {
		var _temp = [];

		for (var i = 0; i < nums; i++) {
			var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

			_temp.push(__temp__);
		}

		return _temp;
	}

	//获得一个随机数工具函数
	function getRandom(min, max) {
		var __temp__ = (min + (max - min) * Math.random()).toFixed(2);
		return __temp__;
	}

	//
	ret.getOption = function () {
		return {
			title: {
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['物料短缺报警', '计划延期报警', '设备故障报警']
			},
			toolbox: {
				show: true,
				feature: {
					dataView: { show: true, readOnly: false },
					magicType: { show: true, type: ['line', 'bar'] },
					restore: { show: true },
					saveAsImage: { show: true }
				}
			},
			calculable: true,
			xAxis: [
				{
					type: 'category',
					data: ['2017/01/01', '2017/01/02', '2017/01/03', '2017/01/04', '2017/01/05', '2017/01/06']
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: '物料短缺报警',
					type: 'bar',
					data: [2, 4, 7, 2, 2, 7]
				},
				{
					name: '计划延期报警',
					type: 'bar',
					data: [2, 5, 9, 2, 2, 7, 1]
				}
				,
				{
					name: '设备故障报警',
					type: 'bar',
					data: [2, 5, 9, 2, 2, 7]
				}
			]
		};
	}

	ret.draw = function () {

		ret.chart = echarts.init(document.getElementById('echarts2'));

		var option = ret.getOption();

		option = putOn.gauge1(option);

		ret.chart.setOption(option);

	}

	return ret;

})





















