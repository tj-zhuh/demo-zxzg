
require.config({
    paths: config.getPaths(1)
})

define(function (require) {

    var dao = require('dao');
    var tj = require('tj');
    var nav = require('nav/nav');
    var frames = require('./frames');

    nav.onchange = function (activeMenus) {
        var path = 'develop/';
        var arr = activeMenus;
        for (var i = 0; i < arr.length; i++) {
            path += arr[i].folder;
            path += '/';
        }

        frames.open(path + 'page.html?level=' + activeMenus.length);
    } 

    tj.addLoadEvent(function () {

        dao.getMenu(function (data) {

            for (var i = 0; i < data.length; i++) {
                if (data[i].level ==1) {
                    data[i].iconUrl = './develop/index/icons/' + data[i].folder + '.png';                    
                }
            }

            var dom1 = document.getElementById('menu1');
            var dom2 = document.getElementById('menu2');          
            nav.load(data);

            var devHack = (function () {
                function getUrlParam(name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return decodeURI(r[2]); return null;
                }
                var p = getUrlParam('p');
                if (p) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].menuName.indexOf(p) >= 0) {
                            nav.jump(data[i].menuId);
                            break;
                        }
                    }
                }
            })();
        });

        document.getElementById('logo').addEventListener('click', function () {
            nav.jumpByName('工作台');
        }, false);
    }) 



    window.g = {
        jump: function (name) {
            nav.jumpByName(name);
        },
        update: function () {
            frames.update();
        }
    }
})
