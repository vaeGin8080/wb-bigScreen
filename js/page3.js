/**
 */
$(function() {
	console.log($("#char1"));
	char1();
	char2();
	// char3();
	// char4();
	charline()
	$('.close').click(function() {
		$('.popup').hide()
	})
	$('.tags').click(function() {
		$('.popup').show()
		char5();
	})
})

function char1() {

	let myChart = echarts.init(document.getElementById('chart1'));

	option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			show: true,
			bottom: '-2%',
			icon: 'circle',
			textStyle: {
				color: 'white'
			}
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['60%', '75%'],
			avoidLabelOverlap: false,
			itemStyle: {
				borderColor: '#fff',
				borderWidth: 2,
				normal: {
					borderWidth: 3,
					borderColor: "#003359"
				}
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
					name: '1号仓'
				},
				{
					value: 735,
					name: '2号仓'
				},
				{
					value: 580,
					name: '3号仓'
				},
			]
		}]
	};

	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}

function char2() {

	let myChart = echarts.init(document.getElementById('chart2'));

	option = {
		title: [{
			text: '完成',
			x: '30%',
			top: '52%',
			textStyle: {
				color: '#fff',
				fontSize: 12,
				fontWeight: '100',
			}
		}, {
			text: '39%',
			x: '45%',
			top: '48%',
			textStyle: {
				color: '#CD9DFF',
				fontSize: 26,
				fontWeight: '600',
			}
		},{
			text: '1.6万吨',
			x: 'center',
			top: '35%',
			textStyle: {
				fontSize: '12',
				color: '#fff',
				foontWeight: '600',
			},
		}],
		polar: {
			radius: ['55%', '65%'],
			center: ['50%', '50%'],
		},
		angleAxis: {
			max: 100,
			show: false,
		},
		radiusAxis: {
			type: 'category',
			show: true,
			axisLabel: {
				show: false,
			},
			axisLine: {
				show: false,

			},
			axisTick: {
				show: false
			},
		},
		series: [{
				name: '',
				type: 'bar',
				roundCap: true,
				barWidth: 60,
				showBackground: true,
				backgroundStyle: {
					color: 'rgba(66, 66, 66, .3)',
				},
				data: [60],
				coordinateSystem: 'polar',

				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: '#00C1FF'
						}, {
							offset: 1,
							color: '#BF19FF'
						}]),
					}
				}

			},

		]
	};

	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}

function char3() {
	let myChart = echarts.init(document.getElementById('chart3'));

	var data = [501, 600, 550];
	var className = ['精煤', '原煤', '块煤', ];
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
					// params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
					params[0].seriesName + ' : ' + params[0].value
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
					console.log(value);
					return value;
				},
			},
			data: data
		}],
		series: [{
				name: '完成率',
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

}

function char4() {

	let myChart = echarts.init(document.getElementById('chart4'));

	option = {
		grid: {
			bottom: 30,
		},
		xAxis: {
			type: 'category',
			data: ['精煤', '原煤', '块煤'],
			axisLabel: {
				color: 'white'
			}
		},
		yAxis: {
			type: 'value',
			name: '万吨',
			nameTextStyle: {
				color: 'white'
			},
			axisLabel: {
				color: 'white'
			}
		},
		series: [{
			data: [{
				value: 100,
				itemStyle: {
					color: '#FFE400'
				}
			}, {
				value: 120,
				itemStyle: {
					color: '#2CDEDD'
				}
			}, {
				value: 200,
				itemStyle: {
					color: '#F95A00'
				}
			}],
			type: 'bar',
			barWidth: 30,
		}]
	};

	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}


function charline() {

	let myChart = echarts.init(document.getElementById('chartline'));
	let xData = []
	let yData = []
	let y1Data = []
	for (let i = 1; i <= 31; i++) {
		xData.push(i + "日");
		yData.push(Math.random() * 100)
		y1Data.push(Math.random() * 100)
	}
	option = {
		grid: {
			bottom: 0,
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
					color: "#B2E7FF",
				},
			},
			data: xData,
		},
		yAxis: {
			type: "value",
			name: "万吨",
			axisLine: {
				show: true,
				lineStyle: {
					color: "#B2E7FF",
				},
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: "rgba(46,177,255,.1)",
				},
			},
		},
		series: [{
			name: "",
			type: "line",
			smooth: true,
			showSymbol: false,
			data: yData,
		}, {
			name: "",
			type: "line",
			smooth: true,
			showSymbol: false,
			data: y1Data,
		}],
	};

	myChart.setOption(option);
	window.addEventListener('resize', function() {
		myChart.resize();
	})

}
