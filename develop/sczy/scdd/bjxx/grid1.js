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
                dataName: '序号'
            }, {
                dataIndex: 'bb',
                dataName: '时间'
            }, {
                dataIndex: 'cc',
                dataName: '车间'
            }, {
                dataIndex: 'dd',
                dataName: '报警类别'
            }, {
                dataIndex: 'ee',
                dataName: '报警级别',
                renderer: function (value) {
                	switch (value.ee) {
                		case '1':
                			return "<div class='level_color' style='background-color:red;'></div>";
                			break;
                		case '2':
                			return "<div class='level_color' style='background-color:#CD9B1D;'></div>";
                			break;
                		case '3':
                			return "<div class='level_color' style='background-color:#EEC900;'></div>";
                			break;
                	}
                }
            }, {
                dataIndex: 'ff',
                dataName: '报警信息'
            }, {
                dataIndex: 'gg',
                dataName: '处理责任人'
            }, {
            	dataIndex: 'gg',
            	dataName: '处理状态'
            },
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