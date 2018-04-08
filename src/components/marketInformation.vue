<template>
	<div id="">
	    <!--创建一个echarts的容器-->
	   	 <div id="echartContainer" style="width:500px; height:500px"></div>
	</div>
</template>

<script>
	var echarts = require('echarts');//引入echarts
	export default{
		name:'marketInformation',
		mounted() {//在mounted()钩子方法中初始化echarts并绘制图表
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('echartContainer'));
			// 绘制图表
            myChart.setOption({
                title: {
                    show:true,
                    x:'center',
                    text: '季度出访次数'
                },
                legend: {
                    y:'bottom',
                    data:['第一季度','第二季度','第三季度','第四季度'],

                },
                xAxis: {
                    data: []
                },
                yAxis: {
                    type : 'value',
                    axisLabel:{formatter:'{value} 次'}

                },

                series: [
                    {
                        barGap:'5%',
                        name: '第一季度',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    },
                    {
                        name: '第二季度',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    },
                    {
                        name: '第三季度',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    },
                    {
                        name: '第四季度',
                        type: 'bar',
                        data: [],
                        itemStyle:{
                            normal:{
                                label:{
                                    show:true,
                                    position:'top',
                                    textStyle:{
                                        fontSize : '15',
                                        fontFamily : '微软雅黑',
                                    }
                                }
                            }
                        },
                    }

                ]

            });

            //var contextPath = contextPath;

            myChart.showLoading();
            //请求数据
            $.get(marketChartQuarterUrl).done(function (data) {
                myChart.hideLoading();

                myChart.setOption({
                    xAxis: {
                        data: data.years
                    },
                    series: [
                        {
                            name: '第一季度',
                            data: data.firstQuarter
                        },
                        {
                            name: '第二季度',
                            data: data.secondQuarter
                        },
                        {
                            name: '第三季度',
                            data: data.thirdQuarter
                        },
                        {
                            name: '第四季度',
                            data: data.fourthQuarter
                        },
                    ]
                });
            });

        
		}

	}
</script>

<style>
</style>