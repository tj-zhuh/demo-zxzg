
// 管理菜单
define(function (require) {

    var hasClass = function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    var addClass = function (obj, cls) {
        if (!hasClass(obj, cls)) obj.className += (obj.className ? " " : "") + cls;
    }

    var removeClass = function (obj, cls) {
        if (hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
            obj.className = obj.className.replace(/^\s+$/, '');
        }
    }

    function clear() {
        for (var i = 0; i < boxes.length; i++) {
            var box = boxes[i];
            box.active = false;
            removeClass(box.dom, 'active');
        }
    }

    function gbnode(node) {
        for (var i = 0; i < boxes.length; i++) {
            var b = boxes[i];
            if (b.node == node) {
                return b;
            }
        }
    }

    function Box() {
        this.dom;
        this.node;
        this.active;
    }

    var boxes = [];

    var __left__ = {
        onchange: null
    };

    var dl;

    __left__.init = function () {
        dl = document.getElementById('menu2');
    }

    __left__.load = function (node) {

        var that = this;

        boxes.length = 0;
        dl.innerHTML = '';

        var arr2 = node.children;

        for (var i = 0; i < arr2.length; i++)
            (function (node2) {

                var dd = document.createElement('dd');
                var header = document.createElement('div');
                dd.appendChild(header);
                var text = document.createTextNode(node2.menuName);
                header.appendChild(text);
                dl.appendChild(dd);

                var box2 = new Box();
                box2.node = node2;
                box2.dom = dd;
                boxes.push(box2);

                dd.addEventListener('click', function () {
                    if (box2.active) return;
                    clear();
                    box2.active = true;
                    addClass(box2.dom, 'active');

                    if (node2.children.length == 0
                        && typeof that.onchange === 'function') {
                        that.onchange(node2);
                    }
                }, false);


                if (node2.children.length > 0) {
                    var cite = document.createElement('cite');
                    header.appendChild(cite);
                    var ul = document.createElement('ul');
                    dd.appendChild(ul);

                    for (var j = 0; j < node2.children.length; j++)
                        (function (node3) {
                            var li = document.createElement('li');
                            var text = document.createTextNode(node3.menuName);
                            li.appendChild(text);
                            ul.appendChild(li);

                            var box3 = new Box();
                            box3.node = node3;
                            box3.dom = li;
                            boxes.push(box3);

                            li.addEventListener('click', function () {

                                if (box3.active) return;
                                clear();

                                box2.active = true;
                                addClass(box2.dom, 'active');
                                box3.active = true;
                                addClass(box3.dom, 'active');

                                if (typeof that.onchange === 'function') {
                                    that.onchange(node3);
                                }

                            }, false);

                        })(node2.children[j])
                }



            })(arr2[i])
    }

    // 跳转
    __left__.jump = function (node) {

        var that = this;

        var box = gbnode(node);
        if (!box) return;

        if (node.level == 3) {
            if (box.active) return;
            clear();
            var parentBox = gbnode(node.parent);
            parentBox.active = true;
            addClass(parentBox.dom, 'active');
            box.active = true;
            addClass(box.dom, 'active');

            if (typeof that.onchange === 'function') {
                that.onchange(node);
            }
        }
        else if (node.level == 2 && node.children.length > 0) {
            this.jump(node.children[0]);
        }
        else {
            if (box.active) return;
            clear();
            box.active = true;
            addClass(box.dom, 'active');

            if (typeof that.onchange === 'function') {
                that.onchange(node);
            }
        }
    }

    return __left__;

})