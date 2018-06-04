
/**
 *  数据格式转换
 *  将数组转化为树形结构，返回根节点
 *
 *
 *  @param {Array} _arr
 *  
 *  _arr每一项包含以下字段
 *      menuId      {String}菜单Id
 *      parentId    {String}父级Id（一级菜单的parentId始终为root）
 *      ……（其它字段用不到）
 *
 *
 *  @return {Object} 
 *  
 *  返回值包含以下字段
 *      children    {Array}孩子数组
 *      origin      {Object}对原始对象的引用 
 *      ……（其它的一些临时字段）
 */

define(function () {
    return function (_arr) {

        // 复制一份，防止修改输入数组
        var arr = _arr.slice();

        // 所有的即将被创建的对象
        var all = [];

        // 创建root对象
        var root = {};
        root.origin = null;
        root.children = [];
        root.menuId = 'root';

        // 将root添加到all
        all.push(root);

        // 循环控制变量
        var loopCount = 0,
            maxCount = arr.length;

        // 方法：在all中，根据menuId找到对象
        var gbid = function (menuId) {
            for (var i = 0; i < all.length; i++) {
                if (all[i].menuId == menuId)
                    return all[i];
            }
        }

        // 执行循环（最多arr.length次）
        while (loopCount++ < maxCount) {

            for (var i = 0; i < arr.length; i++) {
                var menu = arr[i];
                var parent = gbid(menu.parentId);
                if (parent) {
                    var obj = {};
                    obj.origin = menu;
                    obj.children = [];
                    obj.menuId = menu.menuId;
                    parent.children.push(obj);
                    all.push(obj);
                    arr.splice(i, 1);
                    break;
                }
            }
        }

        return root;
    }
})