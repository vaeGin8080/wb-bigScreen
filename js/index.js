/**
 */
$(function() {
	console.log($("#char1"));
	char1();
	char2();
	// char3();
	// char4();

})
//统计分析图
function char1() {

	let myChart = echarts.init(document.getElementById('chart1'));
	option = {
		"dataset": {
			show: false,
			"source": [
				["NAME", "DATA1", "DATA2", "DATA3"],
				["缝制", "41.7", "58.3", "33.3"],
				["后整理", "40.2", "59.8", "33.3"],
				["面里料", "9.6", "90.4", "33.3"],
				["包装", "6.3", "93.7", "33.3"],
				["", "", "", "33.3"]
			]
		},
		"color": [
			"rgba(254,31,101,",
			"rgba(255,176,1,",
			"rgba(255,255,0,",
			"rgba(66,171,69,",
			"rgba(15,188,248,"
		],
		"grid": {
			"top": "3%",
			"right": "0",
			"width": "50%",
			"height": "50%",
			"containLabel": false
		},
		"xAxis": {
			"axisLine": {
				"show": false
			}
		},
		"yAxis": [{
			"type": "category",
			"inverse": true,
			"axisLine": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"axisLabel": {
				"show": true,
				"interval": 0,
				"inside": true,
				"formatter": function(params) {
					var str;
					if (params == 1) {
						str = "{rect" + params + "|}" + "{w1|" + option.dataset.source[params][0] +
							"}" + "{w1|" + option.dataset.source[params][1] + "%}";
					} else {
						if (option.dataset.source[params][0]) {
							str = "{rect" + params + "|}" + "{w2|" + option.dataset.source[params][0] +
								"}" + "{w2|" + option.dataset.source[params][1] + "%}";
						}
					}
					return str;
				},
				"rich": {
					"rect1": {
						"width": 12,
						"height": 1,
						"backgroundColor": "rgba(254,31,101,1)"
					},
					"rect2": {
						"width": 12,
						"height": 1,
						"backgroundColor": "rgba(255,176,1,1)"
					},
					"rect3": {
						"width": 12,
						"height": 1,
						"backgroundColor": "rgba(255,255,0,1)"
					},
					"rect4": {
						"width": 12,
						"height": 1,
						"backgroundColor": "rgba(66,171,69,1)"
					},
					"rect5": {
						"width": 12,
						"height": 1,
						"backgroundColor": "rgba(15,188,248,1)"
					},
					"w1": {
						"width": 35,
						"padding": [
							0,
							0,
							0,
							2
						],
						"fontSize": "{只能改数值,单位rem{0.5}$}",
						"color": "rgba(254,31,101,1)"
					},
					"w2": {
						"width": 35,
						"padding": [
							0,
							0,
							0,
							2
						],
						"fontSize": "{只能改数值,单位rem{0.5}$}",
						"color": "#fff"
					}
				}
			},
			"data": [
				1,
				2,
				3,
				4,
				5
			]
		}],
		"series": [{
				"type": "pie",
				"radius": [
					"78%",
					"90%"
				],
				"clockwise": false,
				"hoverAnimation": false,
				"labelLine": {
					"show": false
				},
				"itemStyle": {
					"color": function(params) {
						var colorList = [{
								type: "linear",
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
										offset: 0,
										color: option.color[0] + "0.1)"
									},
									{
										offset: 1,
										color: option.color[0] + "1)"
									}
								],
								global: false
							},
							option.color[0] + "0.1)", "rgba(0,0,0,0)"
						];
						return colorList[params.dataIndex];
					}
				},
				"label": {
					"show": false
				},
				"encode": {
					"itemName": "NAME",
					"value": 1
				},
				"seriesLayoutBy": "row"
			},
			{
				"type": "pie",
				"radius": [
					"60%",
					"72%"
				],
				"clockwise": false,
				"hoverAnimation": false,
				"labelLine": {
					"show": false
				},
				"itemStyle": {
					"color": function(params) {
						var colorList = [{
								type: "linear",
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
										offset: 0,
										color: option.color[1] + "0.1)"
									},
									{
										offset: 1,
										color: option.color[1] + "1)"
									}
								],
								global: false
							},
							option.color[1] + "0.1)", "rgba(0,0,0,0)"
						];
						return colorList[params.dataIndex];
					}
				},
				"label": {
					"show": false
				},
				"encode": {
					"itemName": "NAME",
					"value": 2
				},
				"seriesLayoutBy": "row"
			},
			{
				"type": "pie",
				"radius": [
					"42%",
					"54%"
				],
				"clockwise": false,
				"hoverAnimation": false,
				"labelLine": {
					"show": false
				},
				"itemStyle": {
					"color": function(params) {
						var colorList = [{
								type: "linear",
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
										offset: 0,
										color: option.color[2] + "0.1)"
									},
									{
										offset: 1,
										color: option.color[2] + "1)"
									}
								],
								global: false
							},
							option.color[2] + "0.1)", "rgba(0,0,0,0)"
						];
						return colorList[params.dataIndex];
					}
				},
				"label": {
					"show": false
				},
				"encode": {
					"itemName": "NAME",
					"value": 3
				},
				"seriesLayoutBy": "row"
			},
		]
	};

	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}

function char2() {

	let myChart = echarts.init(document.getElementById('chart2'));

	option = {
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
			radius: ['60%', '75%'],
			avoidLabelOverlap: false,
			itemStyle: {
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
					fontSize: '20',
					fontWeight: 'bold'
				}
			},
			labelLine: {
				show: false
			},
			data: [{
					value: 1048,
					name: '搜索引擎'
				},
				{
					value: 735,
					name: '直接访问'
				},
				{
					value: 580,
					name: '邮件营销'
				},
				{
					value: 484,
					name: '联盟广告'
				},
				{
					value: 300,
					name: '视频广告'
				}
			]
		}]
	};

	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}

function char3() {

	var myChart = echarts.init($("#char3")[0]);

	option = {
		legend: {
			data: ['车辆行驶数量'],
			textStyle: {
				color: '#ffffff',

			}
		},
		grid: {
			show: 'true',
			borderWidth: '0'
		},

		calculable: false,
		tooltip: {
			trigger: 'axis',
			formatter: "Temperature : <br/>{b}km : {c}°C"
		},
		xAxis: [{
			type: 'value',
			axisLabel: {
				formatter: '{value}',
				textStyle: {
					color: '#fff'
				}
			},

			splitLine: {
				lineStyle: {
					width: 0,
					type: 'solid'
				}
			}
		}],
		yAxis: [{
			type: 'category',
			axisLine: {
				onZero: false
			},
			axisLabel: {
				formatter: '{value} km',
				textStyle: {
					color: '#fff'
				}
			},
			splitLine: {
				lineStyle: {
					width: 0,
					type: 'solid'
				}
			},
			boundaryGap: false,
			data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
		}],
		series: [{
			name: '车辆行驶数量',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					lineStyle: {
						shadowColor: 'rgba(0,0,0,0.4)'
					}
				}
			},
			data: [15, 0, 20, 45, 22.1, 25, 70, 55, 76]
		}]
	};

	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}

function char4() {

	var myChart = echarts.init($("#char4")[0]);

	option = {
		grid: {
			show: 'true',
			borderWidth: '0'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},

			formatter: function(params) {
				var tar = params[0];
				return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
			}
		},

		xAxis: [{
			type: 'category',
			splitLine: {
				show: false
			},
			data: ['客运车', '危险品车', '网约车', '学生校车'],
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			}

		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			}
		}],
		series: [

			{
				name: '报警数量',
				type: 'bar',
				stack: '总量',
				itemStyle: {
					normal: {
						label: {
							show: true,
							position: 'inside'
						}
					}
				},
				data: [2900, 1200, 300, 200, 900, 300]
			}
		]
	};

	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}
