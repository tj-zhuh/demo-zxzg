define(function (require) {
    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb: null
    };

    ret.drawGrid = function () {
        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: ['ID', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll'],
            columns: [{
                dataIndex: 'aa',
                dataName: '序号',
                renderer: function (x) {
                	if (x.aa)
                		return x.aa;
                	else { return "&nbsp;" }
                }
            }, {
                dataIndex: 'bb',
                dataName: '产品名称'
            }, {
                dataIndex: 'cc',
                dataName: '客户名称'
            }, {
                dataIndex: 'dd',
                dataName: '产品代码'
            }, {
                dataIndex: 'ee',
                dataName: '产品规格'
            }, {
                dataIndex: 'ff',
                dataName: '数量'
            }, {
                dataIndex: 'gg',
                dataName: '生产日期'
            }, {
            	dataIndex: 'hh',
            	dataName: '检验结果'
            }, {
            	dataIndex: 'ii',
            	dataName: '发货日期'
            }]
        })

        ret.tb.init(dao.getGridData());

        ////添加
        //ret.tb.on('click', '.add', function (line, all) {
        //    console.log('你点击了行内添加按钮');
        //})

        //修改
        ret.tb.on('click', 'tb-edit', function (line, all) {
            console.log('你点击了行内编辑按钮');
            console.log(line);
        })

        //删除
        ret.tb.on('click', 'tb-delete', function (line, all) {
            console.log('你点击了行内删除按钮');
            console.log(line);

            //ret.tb.loadData(dao.reGetGridData());
        })
    }

    return ret;
})