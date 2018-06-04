

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
                dataName: '时间'

            }, {
                dataIndex: 'cccc',
                dataName: '车间'

            }, {
                dataIndex: 'dddd',
                dataName: '报警类别'

            }, {
                dataIndex: 'eeee',
                dataName: '报警级别',
                renderer: function (x) {
                    if (x.fcolor === 'red')
                        return "<div class='colorDiv redDiv'>" +  "</div>"
                    if (x.fcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "</div>"
                    if (x.fcolor === 'orange')
                        return "<div class='colorDiv orangeDiv'>" + "</div>"
                }

            }, {
                dataIndex: 'ffff',
                dataName: '报警信息'

            }, {
                dataIndex: 'gggg',
                dataName: '处理责任人'

            }, {
                dataIndex: 'hhhh',
                dataName: '处理状态'
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





















