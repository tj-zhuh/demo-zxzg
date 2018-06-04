
require.config({
    paths: config.getPaths(2)
})

define(function (require) {
    require('totop');
    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
   
    $(function () {

        grid1.drawGrid();
        grid2.drawGrid();
        chart1.draw();
        chart2.draw();




        top.g.update();

        document.getElementById('btn1').addEventListener('click', function () {
            top.g.jump('技术准备令管理');
        }, false);

        document.getElementById('btn2').addEventListener('click', function () {
            top.g.jump('生产工作令管理');
        }, false);

        document.getElementById('btn3').addEventListener('click', function () {
            top.g.jump('在执行工单');
        }, false);

        document.getElementById('btn4').addEventListener('click', function () {
            top.g.jump('返修工单');
        }, false);

        document.getElementById('btn5').addEventListener('click', function () {
            top.g.jump('完工数量');
        }, false);

        document.getElementById('btn6').addEventListener('click', function () {
            top.g.jump('物料需求计划');
        }, false);

        document.getElementById('btn7').addEventListener('click', function () {
            top.g.jump('发货通知管理');
        }, false);


    })
})