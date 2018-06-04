require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    var $ = require('jquery');
    var grid1 = require('grid1');
    var echarts1 = require('echarts1');
    var echarts2 = require('echarts2');

    $(function () {
    	grid1.drawGrid();
    	echarts1.draw();
    	echarts2.draw();
        top.g.update();
    })
})