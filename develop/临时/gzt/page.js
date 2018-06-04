
require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    require('totop');
    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
    //var grid3 = require('grid3');
    //var dao = require('dao');
    

   
    $(function () {

        grid1.drawGrid();
        grid2.drawGrid();
        chart1.draw();
        chart2.draw();




        top.g.update();

    })
})