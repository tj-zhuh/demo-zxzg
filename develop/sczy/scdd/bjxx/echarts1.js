

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
				text: '报警数量',
				x:'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				left: 'left',
				data: ['物料短缺报警', '计划延期报警', '设备故障报警']
			},
			series: [
				{
					name: '报警次数',
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: [
						{ value: 35, name: '物料短缺报警' },
						{ value: 30, name: '计划延期报警' },
						{ value: 24, name: '设备故障报警' }
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		};
	}

	ret.draw = function () {

		ret.chart = echarts.init(document.getElementById('echarts1'));

		var option = ret.getOption();

		option = putOn.gauge1(option);

		ret.chart.setOption(option);

	}

	return ret;

})





















