
// 管理菜单
define(function (require) {

    var __nav__ = {
        onchange: null
    };

    var left = require('./left/left');
    var top = require('./top/top');
    var translate = require('./translate');

    var root; // 虚拟的根节点 
    var all;  // 所有节点

    var history = [];   // 历史
    var current;        // 当前    

    function gbid(id) {
        for (var i = 0; i < all.length; i++) {
            if (all[i].menuId == id) return all[i];
        }
    }

    top.onclick = function (node) {
        __nav__.jump(node);
    }

    left.onchange = function (node) {
        if (typeof __nav__.onchange === 'function') {
            var arr = [];

            while (true) {
                if (node && node.menuId != 'root') {
                    arr.unshift(node);
                } else {
                    break;
                }
                node = node.parent;
            }

            __nav__.onchange(arr);
        }
    }

    /**
         * 加载菜单数据
         * @param {Array} arr
         *
         * arr每一项包含以下字段
         * menuId       {String}菜单Id
         * menuName     {String}菜单名字
         * parentId     {String}父级Id（一级菜单的parentId始终为root）
         * folder       {String}文件夹
         */
    __nav__.load = function (arr) {

        top.init();
        left.init();


        all = translate(arr); // 将输入数据arr，转换为树形结构
        root = all[0];   // 根节点

        // 绘制一级菜单
        top.load(root);

        // 跳转到第一个一级菜单
        this.jump(root.children[0]);
    }

    __nav__.jumpByName = function (name) {
        var a = [];
        for (var i = 0; i < all.length; i++) {
            if (all[i].menuName == name) {
                a.push(all[i]);
            }
        }
        if (a.length > 1) throw new Error('跳转失败，有多个页面的名字叫做' + name);
        if (a.length == 0) throw new Error('跳转失败，未找到名为' + name + '的页面');

        this.jump(a[0]);
    }

    // 跳转
    __nav__.jump = function (menu) {

        var node = null;
        if (typeof menu === 'object') {
            node = menu;
        } else {
            node = gbid(menu);
        }

        if (!node) return;
        if (node.active) return;

        switch (node.level) {
            case 0:
                this.jump(node.children[0]);
                break;
            case 1:
                top.setActive(node);
                left.load(node);
                left.jump(node.children[0]);
                break;
            case 2:
                var level1 = node.parent;
                top.setActive(level1);
                left.load(level1);
                left.jump(node);
                break;
            case 3:
                var level1 = node.parent.parent;
                top.setActive(level1);
                left.load(level1);
                left.jump(node);
                break;
        }

    }

    return __nav__;

})