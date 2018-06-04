

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

    function Box() {
        this.dom;
        this.node;
    }

    var boxes = [];


    var __top__ = {
        onclick: null
    };

    var ul;
    var menu1name;

    __top__.init = function () {
        ul = document.getElementById('menu1');
        menu1name = document.getElementById('menu1name');
    }

    __top__.load = function (root) {

        var that = this;

        for (var i = 0; i < root.children.length; i++)
            (function (node) {

                var li = document.createElement('li');
                var img = document.createElement('img');
                img.src = node.iconUrl;
                var text = document.createTextNode(node.menuName);
               
                li.appendChild(img);
                li.appendChild(text);
                ul.appendChild(li);
                 
                var box = new Box();
                box.node = node;
                box.dom = li;

                li.addEventListener('click', function () {

                    if (hasClass(box.dom, 'active')) return;
                    
                    if (typeof that.onclick === 'function') {
                        that.onclick(node);
                    }

                }, false);

                boxes.push(box);

            })(root.children[i])
    }

    __top__.setActive = function (node) {

        for (var i = 0; i < boxes.length; i++) {
            var box = boxes[i];
            if (box.node == node) {
                addClass(box.dom, 'active');
            } else {
                removeClass(box.dom, 'active');
            }
        }
        menu1name.innerHTML = node.menuName; 
    }

    return __top__;
})