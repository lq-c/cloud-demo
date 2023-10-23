var chart1 = {
    title: {
        text: "A项目访问量",
        left: 'center',
        padding: 28,
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: 'bottom',
        icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 7,// 设置间距
        padding: [0, 0, 15, 0] //图例距离
    },
    series: [
        {
            name: '访问量',
            type: 'pie',
            radius: ['40%', '65%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '22',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 36, name: '项目总访问量' },
                { value: 12, name: '项目今日访问量' },
             
                // { value: 735, name: 'EntityFramework' },
                // // { value: 735, name: 'JWT' },
                // { value: 735, name: 'Redis' },
                // { value: 735, name: 'Vue3.0' },
                // { value: 580, name: 'Vuex' },
                // { value: 484, name: 'Element plus' }
            ]
        }
    ]
}

var chart2 = {
    title: {
        text: '文件上传下载'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['上传量', '下载量'],
        padding: [0, 0, 15, 0] //图例距离
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'13%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [ '2023.9.09', '2023.9.10', '2023.9.11', '2023.9.12', '2023.9.13', '2023.9.14', '2023.9.15']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '上传量',
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {

                normal: {
                    barBorderRadius: [4, 4, 0, 0]
                }
            },
            data: [ 730, 620, 420, 932, 701, 834, 890]
        },
        {
            name: '下载量',
            type: 'bar',

            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            data: [230, 210, 120, 132, 101, 134, 90]
        }
    ]
}
var chart3 = {
    title: {
        text: '文档统计',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: 'bottom',
        icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 7,// 设置间距
        padding: [0, 0, 10, 0] //图例距离
    },
    series: [
        {

            name: '文档统计',
            type: 'pie',
            radius: '55%',
            data: [
                { value: 748, name: 'rvt文件' },
                { value: 435, name: 'gltf文件' },
                { value: 580, name: 'nwc文件' },
                { value: 280, name: 'skp文件' },
                { value: 284, name: 'pak文件' },
                { value: 300, name: '3dxm文件' },
                { value: 200, name: 'fbx文件' },
                { value: 600, name: 'ifc文件' },
                { value: 400, name: '其它文件' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
var chart4={
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'13%',
        containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
export { chart1, chart2, chart3,chart4 }