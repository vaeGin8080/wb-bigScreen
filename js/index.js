/**
 */
$(function() {
	char1();
	char2();
	char3();
	char4();
	var line = null
	$.getJSON('json/index/charPopup.json', function(res) {
		console.log(res);
		line = res
		
	})
	$('.close').click(function() {
		$('.popup').hide()
	})
	$('.tags').click(function() {
		$('.popup').show()
		$('.pop-title').text($(this).parent().find('.box-title').text())
		char5(line);
	})
})
//统计分析图
// function char1() {

// 	var myChart = echarts.init(document.getElementById('chart1'));
// 	console.log(1);
// 	$.getJSON('json/index/char1.json',function(res){
// 		console.log(res);
// 	})
// 	var title = [
// 		'精煤',
// 		'原煤',
// 		'混煤'
// 	];
// 	var total = 100
// 	var t1 = 56
// 	var t2 = 48
// 	var t3 = 42
// 	option = {
// 		color: ["#F5A623", "#22F9B6", "#5B8FF9"],
// 		legend: {
// 			show: false,
// 			orient: "vertical",
// 			right: "0",
// 			itemHeight: 10, //图例的高度
// 			itemGap: 8, //图例之间的间距
// 			textStyle: {
// 				color: "#fff",
// 			},
// 			data: title,
// 		},
// 		series: [{
// 				name: title[0],
// 				type: "pie",
// 				radius: ["70%", "80%"],
// 				//环的位置
// 				animation: false,
// 				label: {
// 					show: false,
// 					position: "center",
// 				},
// 				labelLine: {
// 					normal: {
// 						show: false,
// 					},
// 				},
// 				emphasis: {
// 					scale: false,
// 					label: {
// 						show: true,
// 						fontSize: "20",
// 					},
// 				},
// 				data: [{
// 						value: t1, //需要显示的数据
// 						name: title[0],
// 					},
// 					{
// 						value: total - t1,
// 						itemStyle: {
// 							normal: {
// 								color: "#3A6D8C",
// 							},
// 						},
// 					},
// 				],
// 			},
// 			{
// 				name: title[1],
// 				type: "pie",
// 				radius: ["50%", "60%"],
// 				animation: false,
// 				label: {
// 					show: false,
// 					position: "center",
// 				},
// 				labelLine: {
// 					normal: {
// 						show: false,
// 					},
// 				},
// 				emphasis: {
// 					scale: false,
// 					label: {
// 						show: true,
// 						fontSize: "20",
// 					},
// 				},
// 				data: [{
// 						name: title[1],
// 						value: t2,
// 					},
// 					{
// 						value: total - t2,
// 						itemStyle: {
// 							normal: {
// 								color: "#3A6D8C",
// 							},
// 						},
// 					},
// 				],
// 			},
// 			{
// 				name: title[2],
// 				type: "pie",
// 				radius: ["30%", "40%"],
// 				animation: false,
// 				label: {
// 					show: false,
// 					position: "center",
// 				},
// 				labelLine: {
// 					normal: {
// 						show: false,
// 					},
// 				},
// 				emphasis: {
// 					scale: false,
// 					label: {
// 						show: true,
// 						fontSize: "14",
// 						fontWeight: "bold",
// 					},
// 				},
// 				data: [{
// 						name: title[2],
// 						value: t3,
// 					},
// 					{
// 						value: total - t3,
// 						itemStyle: {
// 							normal: {
// 								color: "#3A6D8C",
// 							},
// 						},
// 					},
// 				],
// 			},
// 		],
// 	};

// 	myChart.setOption(option);
// 	window.addEventListener('resize', function() {
// 		myChart.resize();
// 	})

// }
function char1() {

	var myChart = echarts.init(document.getElementById('chart1'));
	$.getJSON('json/index/char1.json', function(res) {
		option = {
			tooltip: {
				show: false,
				trigger: 'item'
			},
			legend: {
				show: true,
				orient: 'vertical',
				left: 'right',
				top: '3%',
				textStyle: {
					color: 'white'
				}
			},
			series: [{
				name: '',
				type: 'pie',
				radius: '60%',
				label: {
					color: '#fff',
					formatter: '{b}:{d}%',
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '14',
						fontWeight: 'bold'
					}
				},
				data: res.data
			}]
		};
		myChart.setOption(option);
		window.addEventListener('resize', function() {
			myChart.resize();
		})
	})

}

function char2() {

	var myChart = echarts.init(document.getElementById('chart2'));
	$.getJSON('json/index/char2.json', function(res) {
		var option = {
			tooltip: {
				show: false,
				trigger: 'item'
			},
			legend: {
				show: false,
				top: '5%',
				left: 'center'
			},
			series: [{
				name: '访问来源',
				type: 'pie',
				radius: ['45%', '55%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderColor: '#fff',
					borderWidth: 2
				},
				label: {
					color: '#fff',
					formatter: '{b}:{d}%',
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '20',
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: true
				},
				data: res.data
			}]
		};

		myChart.setOption(option);
		window.addEventListener('resize', function() {
			myChart.resize();
		})
	})
}

function char3() {
	var myChart = echarts.init(document.getElementById('chart3'));
	$.getJSON('json/index/char3.json', function(res) {
		var data = res.data;
		var className = res.titles;
		var colorList = ['#39B3FF', '#47E0E0', '#7891D9', '#83D978', '#C7A530', '#FF8439'];
		var defaultData = [100, 100, 100];
		option = {
			grid: {
				left: '5%',
				right: '5%',
				bottom: '5%',
				top: '15%',
				containLabel: true
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'none'
				},
				formatter: function(params) {
					return params[0].name + '<br/>' +
						"<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
						params[0].value
				}
			},
			xAxis: {
				show: false,
				type: 'value'
			},
			yAxis: [{
				type: 'category',
				inverse: true,
				axisLabel: {
					show: true,
					textStyle: {
						color: '#fff'
					},
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				data: className
			}, {
				type: 'category',
				inverse: true,
				axisTick: 'none',
				axisLine: 'none',
				show: true,
				axisLabel: {
					textStyle: {
						color: '#ffffff',
						fontSize: '12'
					},
					formatter: function(value) {
						return value;
					},
				},
				data: data
			}],
			series: [{
					name: '',
					type: 'bar',
					zlevel: 1,
					itemStyle: {
						normal: {
							barBorderRadius: 0,
							color: (params) => {
								return colorList[params.dataIndex]
							}
						},
					},
					barWidth: 20,
					data: data
				},
				{
					name: '背景',
					type: 'bar',
					barWidth: 20,
					barGap: '-100%',
					data: defaultData,
					itemStyle: {
						normal: {
							color: '#1B375E',
							barBorderRadius: 0,
						}
					},
				},
			]
		};
		myChart.setOption(option);
		window.addEventListener('resize', function() {
			myChart.resize();
		})
	})

}

function char4() {

	var myChart = echarts.init(document.getElementById('chart4'));
	// $.getJSON('json/index/char3.json', function(res) {})
	$.getJSON('json/index/char3.json', function(res) {
		var colorList = ['#FFE400', '#2CDEDD', '#F95A00', '#83D978', '#C7A530', '#FF8439'];
		option = {
			grid: {
				bottom: 30,
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'none'
				},
			},
			xAxis: {
				type: 'category',
				data: res.titles,
				axisLabel: {
					color: 'white'
				},
				nameTextStyle: {
					color: 'white'
				},
			},
			yAxis: {
				type: 'value',
				name: '万吨',
				nameTextStyle: {
					color: 'white'
				},
				axisLabel: {
					color: 'white'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#7FD6FF',
						type: 'dashed'
					}
				}
			},
			series: [{
				type: 'bar',
				barWidth: 30,
				itemStyle: {
					normal: {
						barBorderRadius: 0,
						color: (params) => {
							return colorList[params.dataIndex]
						}
					},
				},
				data: res.data,
			}]
		};

		myChart.setOption(option);
		window.addEventListener('resize', function() {
			myChart.resize();
		})
	})


}


function char5(res) {
	var myChart = echarts.init(document.getElementById('chartpop'));
	var xData = []
	var titles = res.titles
	var json = res.data
	for (var i = 1; i <= res.xData.length; i++) {
		xData.push(i + "月");
	}
	option = {
		grid: {
			bottom: 40,
		},
		color: ["#5B8FF9", "#5AD8A6"],
		tooltip: {
			show: true,
		},
		legend: {
			show: false,
			right: "3%",
			align: "right",
			textStyle: {
				color: "#fff",
			},
		},
		grid: {
			left: "10px",
			right: "4%",
			bottom: "0",
			containLabel: true,
		},
		xAxis: {
			type: "category",
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: "#2EB1FF",
				},
			},
			data: xData,
		},
		yAxis: {
			type: "value",
			name: "万吨",
			axisLine: {
				lineStyle: {
					width: 0,
					color: "#2EB1FF",
				},
			},
			splitLine: {
				lineStyle: {
					color: "rgba(46,177,255,.1)",
				},
			},
		},
		series: [{
			name: titles[0],
			type: "line",
			lineStyle: {
				width: 3,
				color: "#5AD8A6",
			},
			itemStyle: {},
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: "#5AD8A6", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "transparent", // 100% 处的颜色
						},
					],
					global: false, // 缺省为 false
				},
			},
			smooth: true,
			data: json[titles[0]],
		}, {
			name: titles[1],
			type: "line",
			lineStyle: {
				width: 3,
				color: "#F95A00",
			},
			itemStyle: {},
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: "#F95A00", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "transparent", // 100% 处的颜色
						},
					],
					global: false, // 缺省为 false
				},
			},
			smooth: true,
			data: json[titles[1]],
		}, {
			name: titles[2],
			type: "line",
			lineStyle: {
				width: 3,
				color: "#229AFF",
			},
			itemStyle: {},
			areaStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
							offset: 0,
							color: "#229AFF", // 0% 处的颜色
						},
						{
							offset: 1,
							color: "transparent", // 100% 处的颜色
						},
					],
					global: false, // 缺省为 false
				},
			},
			smooth: true,
			data: json[titles[2]],
		}],
	};
	
	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}
