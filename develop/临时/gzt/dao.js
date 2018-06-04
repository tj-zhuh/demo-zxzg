


define(function (require) {

    var ret = {};

    ret.queryIndexData = function (callback) {
        var indexData = {
            xAxis: ['阴极铜综合电单耗(Kwh/t)', '阳极铜电单耗(Kwh/t)', '铜冶炼综合能耗(kgce/t)', '阴极铜电单耗(Kwh/t)', '硫酸电单耗(Kwh/t)'],
            series: [{
                name: "实际",
                data: [3, 5, 3, 7, 5, 4, 6, 8, 4, 6, 2, 5, 8, 9, 4]
            }, {
                name: "指标",
                data: [6, 8, 4, 8, 5, 4, 6, 3, 8, 6, 3, 6, 8, 5, 7]
            }]
        }

        callback(indexData);
    }

    //
    ret.getGridData1 = function () {

        return [
            {
                Id: 11, aaaa: '1', bbbb: '8:13:00', cccc: '特种机器人', dddd: '设备报警', eeee: 'Z-1153715', ffff: '1#电闸跳闸10分钟', gggg: '张晨', hhhh: '已处理', iiii: '3', jjjj: '10', kkkk: '2', llll: '工序1', mmmm: '1组', nnnn: '10', oooo: '设备1',
                ecolor: 'red', fcolor: 'red', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'blue', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
                Id: 11, aaaa: '2', bbbb: '9:12:00', cccc: '特种机器人', dddd: '库存不足', eeee: 'Z-1123715', ffff: '1#电闸跳闸10分钟', gggg: '王玉波', hhhh: '未处理', iiii: '5', jjjj: '20', kkkk: '3', llll: '工序2', mmmm: '2组', nnnn: '20', oooo: '设备2',
                ecolor: 'red', fcolor: 'orange', gcolor: 'green', hcolor: 'green', icolor: 'green', jcolor: 'blue', kcolor: 'red', lcolor: 'blue', mcolor: 'red'
            }, {
                Id: 11, aaaa: '3', bbbb: '10:33:00', cccc: '特种机器人', dddd: '计划超期', eeee: 'Z-1157615', ffff: '1#电闸跳闸10分钟', gggg: '沈正义', hhhh: '未处理', iiii: '7', jjjj: '30', kkkk: '4', llll: '工序3', mmmm: '3组', nnnn: '30', oooo: '设备3',
                ecolor: 'yellow', fcolor: 'yellow', gcolor: 'yellow', hcolor: 'yellow', icolor: 'red', jcolor: 'red', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
                Id: 11, aaaa: '4', bbbb: '11:07:00', cccc: 'PCBA', dddd: '计划超期', eeee: 'Z-1157615', ffff: '1#电闸跳闸10分钟', gggg: '沈正义', hhhh: '未处理', iiii: '7', jjjj: '30', kkkk: '4', llll: '工序3', mmmm: '3组', nnnn: '30', oooo: '设备3',
                ecolor: 'yellow', fcolor: 'yellow', gcolor: 'yellow', hcolor: 'yellow', icolor: 'red', jcolor: 'red', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
                Id: 11, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '',
                ecolor: '', fcolor: '', gcolor: '', hcolor: '', icolor: '', jcolor: '', kcolor: '', lcolor: '', mcolor: ''
            }, {
                Id: 11, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '',
                ecolor: '', fcolor: '', gcolor: '', hcolor: '', icolor: '', jcolor: '', kcolor: '', lcolor: '', mcolor: ''
            }
         ]

    }

    ret.getGridData2 = function () {

        return [
            { Id: 11, aaaa: '1', bbbb: '6KV/10KV工作段保护', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 12, aaaa: '2', bbbb: '2号机组脱硫段2A保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 13, aaaa: '3', bbbb: '2号机组脱硫段2A保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 14, aaaa: '4', bbbb: '2号机组厂内输煤B段保护', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 15, aaaa: '5', bbbb: '2号机组6KV A段备用电源进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 16, aaaa: '6', bbbb: '2号机组6KV B段备用电源进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 17, aaaa: '7', bbbb: '2号机组发电机短路试验电源', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 18, aaaa: '8', bbbb: '2号机组汽机变2A保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 19, aaaa: '9', bbbb: '2号机组升压站变B保护', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 20, aaaa: '10', bbbb: '2号机组磨煤机2D保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 21, aaaa: '11', bbbb: '2号机组一次风机2A保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 22, aaaa: '12', bbbb: '2号机组1号辅机循环水泵保护', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 22, aaaa: '13', bbbb: '2号机组炉水循环泵2C保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' }
        ]

    }

    ret.getGridData3 = function () {

        return [
            {
                Id: 11, aaaa: '1', bbbb: '', cccc: '张三', dddd: '2016/7/10', eeee: 'TJ-9980', ffff: 'TJ-WL80', gggg: '物料1', hhhh: '图1', iiii: '19', jjjj: '30', kkkk: '工序1', llll: '工序1', mmmm: '增删改查', nnnn: '增删改查', oooo: '增删改查',
                ecolor: 'red', fcolor: 'purple', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'blue', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
                Id: 11, aaaa: '2', bbbb: '', cccc: '李四', dddd: '2016/7/10', eeee: 'TJ-9980', ffff: 'TJ-WL75', gggg: '物料2', hhhh: '图2', iiii: '19', jjjj: '32', kkkk: '工序2', llll: '工序2', mmmm: '增删改查', nnnn: '增删改查', oooo: '增删改查',
                ecolor: 'red', fcolor: 'red', gcolor: 'green', hcolor: 'green', icolor: 'green', jcolor: 'blue', kcolor: 'red', lcolor: 'blue', mcolor: 'red'
            }, {
                Id: 11, aaaa: '3', bbbb: '', cccc: '王二', dddd: '2016/7/10', eeee: 'TJ-9980', ffff: 'TJ-WL80', gggg: '物料3', hhhh: '图3', iiii: '18', jjjj: '33', kkkk: '工序3', llll: '工序3', mmmm: '增删改查', nnnn: '增删改查', oooo: '增删改查',
                ecolor: 'yellow', fcolor: 'yellow', gcolor: 'yellow', hcolor: 'yellow', icolor: 'red', jcolor: 'red', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
                Id: 11, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '',
                ecolor: '', fcolor: '', gcolor: '', hcolor: '', icolor: '', jcolor: '', kcolor: '', lcolor: '', mcolor: ''
            }, {
                Id: 11, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '',
                ecolor: '', fcolor: '', gcolor: '', hcolor: '', icolor: '', jcolor: '', kcolor: '', lcolor: '', mcolor: ''
            }
        ]

    }


    ret.reGetGridData = function () {

        return [
            { Id: 11, aaaa: 'zzbc', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 12, aaaa: 'zhuh', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 13, aaaa: 'zrd', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 14, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 15, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 16, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 17, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 18, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 19, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 20, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 21, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 22, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' }
        ]

    }

    ret.loadSelect = function (id, data) {

        for (var i = 0; i < data.length; i++) {
            var op = document.createElement('option');
            op.innerHTML = data[i];
            id.appendChild(op);
        }
    }

    ret.selectData1 = function () {
        return ['未分配设备']
    }

    ret.selectData2 = function () {
        return ['全部']
    }

    ret.selectData3 = function () {
        return ['滚齿机GH781']
    }

    ret.selectData4 = function () {
        return ['未下发']
    }


    return ret;

})



















