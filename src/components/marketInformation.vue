<template>
	<div>
		<div id="echartMarket">
		    <!--创建一个echarts的容器-->
		    <div id="seaseonContainer" style="width:500px; height:500px"></div>
		   	<div id="monthContainer" style="width:500px; height:500px"></div>
		   	<div id="diquContainer" style="width:500px; height:500px"></div>
		   	<div id="pianquContainer" style="width:500px; height:500px"></div>
		</div>
	</div>
</template>

<script>
	var echarts = require('echarts');//引入echarts
	export default{
		name:'marketInformation',
		data(){
			return{
			}
		},
		mounted() {
			var seaseonContainer = echarts.init(document.getElementById('seaseonContainer'));//季度
			var monthContainer = echarts.init(document.getElementById('monthContainer'));//月度
			var diquContainer = echarts.init(document.getElementById('diquContainer'));//地区
			var pianquContainer = echarts.init(document.getElementById('pianquContainer'));//片区
			
			
			
			//季度表格
				 seaseonContainer.setOption({
				 	title: {
                    show:true,
                    x:'center',
                    text: '季度出访次数'
	                },
	                color: ['#003366', '#006699', '#4cabce', '#4cacaa'],//柱形图的背景颜色
	                tooltip: {},//此属性鼠标移动上面会显示数据。很好。
	                legend: {
	                    y:'bottom',
	                    data:['第一季度','第二季度','第三季度','第四季度'],
	
	                },
	                xAxis: {
	                    data: ['2011','2012','2013']
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
	                        data: [50,60,70],
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
	                        data: [44,55,66],
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
	                        data: [60,50,55],
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
	                        data: [50,40,60],
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
			
			//后台加载数据
			this.$http.seasonVisit().then(function(res){
//				console.log(res)
			})
				
			//*/*/*/*/*/*/*/**/*/*/*/*/*/*/*/




			//月度表格
			monthContainer.setOption({
			    title: {
			        text: '月度出访次数'
			    },
			    color: ['#4cabce'],
			    tooltip: {},
			    legend: {
			        data:['出访次数']
			    },
			    xAxis: {
			        data: []
			    },
			    yAxis: {},
			    series: [{
			        name: '出访次数',
			        type: 'bar',
			        data: []
			    }]
			});
			
			// 异步加载数据
			this.$http.MonthVisit().then(function(res){//调用接口
				 monthContainer.setOption({
			        xAxis: {
			            data:res.data.month
			        },
			        series: [{
			            // 根据名字对应到相应的系列
			            name:'出访次数',
			            data:res.data.data
			        }]
			    });
			})
			/*************/
			
			//地区表格
				diquContainer.setOption({
		            title: {
		                show:true,
		                x:'center',
		                text: '地区出访比例'
		            },
		             color: ['#003366', '#006699', '#4cabce'],//背景颜色
		            legend: {
		                y:'bottom',
		                data:[],
		            },
		            series: [
		                {
		                    name:'按地区出访比例',
		                    type:'pie',
		                    radius: ['30%', '40%'],
		                    legendHoverLink: false, //关闭点击时的高亮
		                    hoverAnimation:false,//关闭放大动画
		                    label: {
		                        show:true,
		                        position:'outside',
		
		                    },
		                    labelLine: {
		                        show:true,
		                        length:50,
		
		                    },
		                    data:[],
		                    itemStyle:{
		                        normal:{
		                            label:{
		                                show: true,
		                                formatter: '{b} : {c}次({d}%)'
		                            },
		                            labelLine :{show:true}
		                        }
		                    }
		                }
		            ]
		
		        });
		        diquContainer.showLoading();
		        
		        //请求数据
			    this.$http.diquVisit().then(function(res){//请求数据
			    		console.log(res)
			            diquContainer.hideLoading();
			            diquContainer.setOption({
			                legend: {
			                    data: res.data.category
			                },
			                series: [
			                    {
			                        name: '出访次数',
			                        data: res.data.pie,
			                    }
			                ]
			            });
			        });
			/*********/
			//片区出访次数
				pianquContainer.setOption({
	            title: {
	                show:true,
	                x:'center',
	                text: '片区出访比例'
	            },
	             color: ['#4cabce', '#4cacaa'],//背景颜色
	            legend: {
	                y:'bottom',
	                data:[],
	            },
	            series: [
	                {
	                    name:'按地区出访比例',
	                    type:'pie',
	                    radius: ['30%', '40%'],
	                    legendHoverLink: false, //关闭点击时的高亮
	                    hoverAnimation:false,//关闭放大动画
	                    label: {
	                        show:true,
	                        position:'outside',
	                    },
	                    labelLine: {
	                        show:true,
	                        length:50,
	                    },
	                    data:[],
	                    itemStyle:{
	                        normal:{
	                            label:{
	                                show: true,
	                                formatter: '{b} : {c}次({d}%)'
	                            },
	                            labelLine :{show:true}
	                        }
	                    }
	                }
	            ]
	        });
	
	        pianquContainer.showLoading();
	        this.$http.pianquVisit().then(function(res){//请求数据
	            pianquContainer.hideLoading();
	            pianquContainer.setOption({
	                legend: {
	                    data: res.data.category
	                },
	                series: [
	                    {
	                        name: '出访次数',
	                        data: res.data.pie,
	                    }
	                ]
	            });
	        });
          /******/
			
		}
	}
</script>

<style>
	#echartMarket{
		max-width:1100px ;
		height: 100%;
		margin: auto;
		/*border:1px solid #3762BC*/
	}
	#seaseonContainer,#monthContainer,#diquContainer,#pianquContainer{
		margin: 20px;
		display: inline-block;
		/*float: left;*/
		/*border:1px solid red;*/
	}
</style>