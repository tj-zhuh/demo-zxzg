
// 负责iframe的绘制和删除
define(function (require) {

    var __frames__ = {};

    var currentDom;
    var expire = [];    // 已经被删除的iframe元素的数组，为以后新创建的iframe使用（防止内存泄露）

    // 删除iframe元素
    function dispose(dom) {

        if (!dom) return;

        dom.src = "about:blank";
        dom.contentWindow.document.write('');
        dom.contentWindow.close();

        var ui = getui();
        ui.removeChild(dom);
        dom.height = 0;
        expire.push(dom);
    }

    // 获得容器
    var __ui;
    function getui() {
        if (!__ui) __ui = document.getElementById('ui');
        return __ui;
    }

    __frames__.open = function (url) {

        var ui = getui();
        var dom;
        if (expire.length > 0) {
            dom = expire.pop();
        } else {
            dom = document.createElement('iframe');
        }

        if (currentDom) {
            dispose(currentDom);
        }

        ui.appendChild(dom);
        dom.frameBorder = 0;
        dom.width = "100%";
        dom.scrolling = "no";
        dom.src = url;
        dom.style.visibility = 'collapse'

        dom.onload = function () {
            dom.height = dom.contentWindow.document.body.scrollHeight + 10;
            dom.style.visibility = 'visible'
        }

        currentDom = dom;
    }

    __frames__.update = function () {
        var f = currentDom;
        if (!f) return;
        f.height = f.contentWindow.document.body.scrollHeight + 10;
    }

    return __frames__;

})