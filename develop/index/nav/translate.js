/*
 *  数据格式转换
 *  输入：原始的、数组格式的菜单数据
 *  输出：以Node.js为模板的根节点
 */

define(function (require) {

    var Node = require('./models/Node');
    var arrtree = require('./pure/arrtree')    

    return function (_arr) {

        // 由数组结构转化为树形结构
        var r = arrtree(_arr); 
        var all = []; 
        var go = function (node, children) { 
            for (var i = 0; i < children.length; i++) {
                var obj = children[i];
                var n = new Node();
                n.menuId = obj.origin.menuId;
                n.menuName = obj.origin.menuName;
                n.level = obj.origin.level;
                n.folder = obj.origin.folder;
                n.iconUrl = obj.origin.iconUrl;
                n.origin = obj.origin;
                n.parent = node;
                node.children.push(n);
                all.push(n);
                go(n, obj.children);
            }
        }

        var root = new Node();
        root.menuId = 'root';
        root.menuName = 'root';
        root.level = 0;
        all.push(root);
        go(root, r.children);
        return all;
    }
})