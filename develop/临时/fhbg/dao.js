define(function (require) {
    var ret = {};

    //
    ret.getGridData = function () {
        return [
            { ID: 1, aa: '1', bb: '消防机器人', cc: '天津消防', dd: 'XFJQR-01', ee: 'X11-01-99', ff: '12', gg: '2017/3/17', hh: '合格', ii: '2017/5/1', jj: '星儿', kk: '质量检验部', ll: '' },
            { ID: 2, aa: '2', bb: '消防机器人', cc: '北京消防', dd: 'XFJQR-01', ee: 'X11-01-99', ff: '8', gg: '2017/3/17', hh: '合格', ii: '2017/5/1', jj: '星儿', kk: '质量检验部', ll: '' },
            { ID: 3, aa: '3', bb: '消防机器人', cc: '北京消防', dd: 'XFJQR-01', ee: 'X11-01-99', ff: '10', gg: '2017/3/17', hh: '合格', ii: '2017/5/1', jj: '星儿', kk: '质量检验部', ll: '' },
			{ ID: '', aa: '', bb: '', cc: '', dd: '', ee: '', ff: '', gg: '', hh: '', ii: '', jj: '', kk: '', ll: '' },
            { ID: '', aa: '', bb: '', cc: '', dd: '', ee: '', ff: '', gg: '', hh: '', ii: '', jj: '', kk: '', ll: '' },
            { ID: '', aa: '', bb: '', cc: '', dd: '', ee: '', ff: '', gg: '', hh: '', ii: '', jj: '', kk: '', ll: '' },
            { ID: '', aa: '', bb: '', cc: '', dd: '', ee: '', ff: '', gg: '', hh: '', ii: '', jj: '', kk: '', ll: '' },
            { ID: '', aa: '', bb: '', cc: '', dd: '', ee: '', ff: '', gg: '', hh: '', ii: '', jj: '', kk: '', ll: '' }
        ]
    }

    ret.reGetGridData = function () {
        return [
            { ID: 1, aa: '合格', bb: '1', cc: '1', dd: '已审核', ee: '配前检查', ff: '2014/06/18', gg: '2014/05/31', hh: '2014/05/30 14:07', ii: '生产计划部', jj: '星儿', kk: '质量检验部', ll: '' },
            { ID: 2, aa: '合格', bb: '2', cc: '2', dd: '已审核', ee: '配前检查', ff: '2014/06/18', gg: '2014/05/31', hh: '2014/05/30 14:07', ii: '生产计划部', jj: '星儿', kk: '质量检验部', ll: '' }
        ]
    }

    return ret;
})