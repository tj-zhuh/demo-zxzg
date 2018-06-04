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
                dataIndex: 'ID',
                dataName: '序号'
            }, {
                dataIndex: 'aa',
                dataName: '状态'
            }, {
                dataIndex: 'bb',
                dataName: '质检状态'
            }, {
                dataIndex: 'cc',
                dataName: '质检结果'
            }, {
                dataIndex: 'dd',
                dataName: '制令号'
            }, {
                dataIndex: 'ee',
                dataName: '材料描述'
            }, {
                dataIndex: 'ff',
                dataName: '图号'
            }, {
                dataIndex: 'gg',
                dataName: '工序'
            }, {
                dataIndex: 'hh',
                dataName: '交检数量'
            }, {
                dataIndex: 'ii',
                dataName: '合格数量'
            }, {
                dataIndex: 'jj',
                dataName: '不合格数量'
            },
            //{
            //    dataIndex: 'kk',
            //    dataName: '产品总金额'
            //},
            //{
            //    dataIndex: 'll',
            //    dataName: '客户合同号'
            //},
            {
                dataIndex: '',
                dataName: '操作',
                renderer: function (line, all) {
                    if (line.ID) {
                        return "<div class='tb-edit'></div><div class='tb-delete'></div>";
                    }
                }
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