

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb:null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo', 'ecolor', 'fcolor', 'gcolor', 'hcolor', 'icolor', 'jcolor', 'kcolor', 'lcolor', 'mcolor' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '序号'
            
            }, {
                dataIndex: 'bbbb',
                dataName: '状态',
                renderer: function (x) {
                    if (x.fcolor === 'red')
                        return "<div class='colorDiv redDiv'>" + x.bbbb + "</div>"
                    if (x.fcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + x.bbbb + "</div>"
                    if (x.fcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + x.bbbb + "</div>"
                    if (x.fcolor === 'purple')
                        return "<div class='colorDiv purpleDiv'>" + x.bbbb + "</div>"
                }

            }, {
                dataIndex: 'cccc',
                dataName: '要求开始'

            }, {
                dataIndex: 'dddd',
                dataName: '工件位置'

            }, {
                dataIndex: 'eeee',
                dataName: '制令号'
            }, {
                dataIndex: 'ffff',
                dataName: '物料编码'

            }, {
                dataIndex: 'gggg',
                dataName: '物料名称'
            }, {
                dataIndex: 'hhhh',
                dataName: '图号'
            }, {
                dataIndex: 'iiii',
                dataName: '模数'
            }, {
                dataIndex: 'jjjj',
                dataName: '齿数'
            }, {
                dataIndex: 'kkkk',
                dataName: '数量工序'
            }, {
                dataIndex: 'llll',
                dataName: '工序描述'
            }, {
                dataIndex: 'mmmm',
                dataName: '加工组'
            }, {
                dataIndex: 'nnnn',
                dataName: '总工时'

            }, {
                dataIndex: 'oooo',
                dataName: '设备'

            }]
        })

        ret.tb.init(dao.getGridData1());

        ////添加
        //ret.tb.on('click', '.add', function (line, all) {
                
        //    console.log('你点击了行内添加按钮');
        //})

        ////修改
        //ret.tb.on('click', 'tb-edit', function (line, all) {

        //    console.log('你点击了行内编辑按钮');
        //    console.log(line);

        //})

        ////删除
        //ret.tb.on('click', 'tb-delete', function (line, all) {

        //    console.log('你点击了行内删除按钮');
        //    console.log(line);

        //    ret.tb.loadData(dao.reGetGridData());

        //})
    }

    return ret;

})





















