define(function () {
    var arr = [
        {
            menuId: "1",
            menuName: "生产计划",
            level: 1,
            folder: "scjhgl",
            parentId: "root"
        }
        , {
            menuId: "1-1",
            menuName: "工作台",
            level: 2,
            folder: "gzt",
            parentId: "1"
        }
        , {
            menuId: "1-2",
            menuName: "生产任务",
            level: 2,
            folder: "scrw",
            parentId: "1"
        }
        , {
            menuId: "1-2-1",
            menuName: "技术准备令管理",
            level: 3,
            folder: "jszbl",
            parentId: "1-2"
        }
        , {
            menuId: "1-2-2",
            menuName: "生产工作令管理",
            level: 3,
            folder: "scgzl",
            parentId: "1-2"
        }
        , {
            menuId: "1-2-3",
            menuName: "物料需求计划",
            level: 3,
            folder: "wlsqd",
            parentId: "1-2"
        }
        , {
            menuId: "1-3",
            menuName: "派工单",
            level: 2,
            folder: "pgdgl",
            parentId: "1"
        }
        , {
            menuId: "1-3-1",
            menuName: "派工单下发",
            level: 3,
            folder: "pgd",
            parentId: "1-3"
        }
        , {
            menuId: "1-3-2",
            menuName: "派工单跟踪",
            level: 3,
            folder: "scsj",
            parentId: "1-3"
        }
        , {
            menuId: "2",
            menuName: "发货通知",
            level: 1,
            folder: "fyjhgl",
            parentId: "root"
        }
        , {
            menuId: "2-1",
            menuName: "发货通知管理",
            level: 2,
            folder: "fyjh",
            parentId: "2"
        }
        , {
            menuId: "3",
            menuName: "生产作业",
            level: 1,
            folder: "sczy",
            parentId: "root"
        }
        , {
            menuId: "3-1",
            menuName: "生产调度",
            level: 2,
            folder: "scdd",
            parentId: "3"
        }
        , {
            menuId: "3-1-1",
            menuName: "生产预警信息管理",
            level: 3,
            folder: "bjxx",
            parentId: "3-1"
        }
        , {
            menuId: "3-2",
            menuName: "质检过程管理",
            level: 2,
            folder: "zjgcgl",
            parentId: "3"
        }
        , {
            menuId: "3-2-1",
            menuName: "质检单管理",
            level: 3,
            folder: "zjd",
            parentId: "3-2"
        }
        , {
            menuId: "4",
            menuName: "仓储物流",
            level: 1,
            folder: "ccwlgl",
            parentId: "root"
        }
        , {
            menuId: "4-1",
            menuName: "入库管理",
            level: 2,
            folder: "ccwl",
            parentId: "4"
        }
        , {
            menuId: "5",
            menuName: "设备管理",
            level: 1,
            folder: "sbgl",
            parentId: "root"
        }
        , {
            menuId: "5-1",
            menuName: "检修管理",
            level: 2,
            folder: "sbjxxx",
            parentId: "5"
        }
    ];
    var tmp = []; var result = []; for (var i = 0; i < arr.length; i++) { var x = arr[i]; if (x.menuName.match(/^#/)) { tmp.push(x) } else { result.push(x) } } for (var i = 0; i < result.length; i++) { for (var j = 0; j < tmp.length; j++) { if (tmp[j].parentId == result[i].menuId) { result[i].tabs = result[i].tabs || ""; result[i].tabs += tmp[j].folder + tmp[j].menuName + "," } } }; return result;
})
