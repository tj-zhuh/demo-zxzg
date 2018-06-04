


define(function (require) {

    var $ = require('jquery');


    $(function () {

        //添加上去
        var div = window.top.document.createElement('div');
        div.id = 'totop';
        div.setAttribute('hide','true');
        div.innerHTML = '返回顶部';
        window.top.document.getElementsByTagName('body')[0].appendChild(div);
        

        //绑定点击事件
        div.onclick = function () {
            //1s内到指定位置
            var _Y = window.top.scrollY;

            function go(n) {
                if (n > 0) {
                    if (n > 2000) { setTimeout(function () { window.top.scrollTo(0, n - 200); go(n - 200); }, 1); }
                    else if (n > 1500) { setTimeout(function () { window.top.scrollTo(0, n - 150); go(n - 150); }, 1); }
                    else if (n > 1000) { setTimeout(function () { window.top.scrollTo(0, n - 100); go(n - 100); }, 1); }
                    else if (n > 500) { setTimeout(function () { window.top.scrollTo(0, n - 10); go(n - 10); }, 1); }
                    else {
                        setTimeout(function () { window.top.scrollTo(0, n - 10); go(n - 10); }, 1);
                    }
                }
                else {
                    div.setAttribute('hide', 'true');
                }
                

            }
            go(_Y);
        }


        //滚动事件(样式)
        //toTop样式滚动触发
        function adds() {

            var _Y = window.top.scrollY;
            if (_Y != 0) {
                div.setAttribute('hide', 'false');
            }
            else {
                div.setAttribute('hide', 'true');
            }

        }
        document.onmousewheel = adds;
        window.top.onscroll = adds;

    })

})