﻿

var config = (function () {

    var ret = {};

    // 获得require.config的内容
    // 参数baseUrl是从页面入口js到根目录的路径(string)，或者是页面的菜单级数（一级菜单是1，二级是2，以此类推，最高到4）
    ret.getPaths = function (baseUrl) {

        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]); return null;
        }
        var level = getUrlParam('level');
        if (level) { baseUrl = parseInt(level); }        

        if (typeof baseUrl === 'number') {
            switch (baseUrl) {
                case 1: baseUrl = '../../'; break;
                case 2: baseUrl = '../../../'; break;
                case 3: baseUrl = '../../../../'; break;
                case 4: baseUrl = '../../../../../'; break;
                case 5: baseUrl = '../../../../../../'; break;
            }
        }

        if (typeof baseUrl !== 'string')
            baseUrl = '';

        var modulePaths = {
            "jquery": "js/modules/jquery-1.12.4",
            "echarts": "js/modules/echarts-3.3.2",
            "tj": "js/modules/tj",
            "chart": "theme2/js/chart",
            "util": "js/modules/util",
            "tb": "lib/tb/tb",
            "puton": "js/modules/puton",
            "tool": "js/modules/Tool",
            "toolbar": "js/modules/toolbar",
            "mtree": "js/modules/mtree",
            "totop": "js/modules/totop",
            "editwin":"js/modules/editwin"
        };

        var obj = {};

        for (var i in modulePaths) {
            obj[i] = baseUrl + modulePaths[i];
        }

        return obj;
    }

    return ret;
})()